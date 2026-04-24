import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

// A placeholder interface for chat messages
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'user', content: 'I was looking at the sky last night!' },
    { id: '2', role: 'assistant', content: 'That sounds beautiful! The night sky is full of wonders.' },
    { id: '3', role: 'assistant', content: 'That\'s interesting! Why do you think the stars shine so bright?' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const baseUrl = process.env.EXPO_PUBLIC_ALI_BASE_URL;
      // In a real app we would read the API key from a secure location.
      // Since it's not provided we'll assume it's injected or the endpoint doesn't need it for our mock purposes.
      // However, usually we need Authorization: Bearer {apiKey}.
      const apiKey = process.env.EXPO_PUBLIC_ALI_API_KEY || ''; // Optional: if added later

      const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
        },
        body: JSON.stringify({
          model: 'qwen3-plus',
          messages: [
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: text }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.choices[0].message.content
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        console.error('API Error:', response.statusText);
        // Add a mock response if API fails due to no key
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "I'm having a little trouble connecting right now, but I love thinking about that!"
        }]);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Oops! My connection is a bit wobbly. Let's keep exploring!"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* TopAppBar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0LVcqma0I1s47TIZGA0vAFt-Q4PSgHLg-VWjbvGQO4TOp-A8t1N03xmrrvob0F3ScnQ4CljCh80IawMV4_W0a0IQakzBP6QytgD9yJEiXhhtMcAa3nd2Xz336y77KJtgWw8wC4HDQTl4J51bc_t8ReINWhhTJjE9lTGo_t0LTCaPi1Dg-q4boE1H3sKTO8ixJ3X-sbcjxR5IgsDh0ILrfJL_f_DoKr1s4b6XCfk9p0CM585oGd0HCqt27UXolewsOSUUucHQSjg' }}
              />
            </View>
            <Text style={styles.headerTitle}>Little Thinker</Text>
          </View>
          <TouchableOpacity style={styles.settingsBtn}>
            <MaterialIcons name="settings" size={28} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollViewRef}
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {/* AI Character Intro */}
          <View style={styles.aiIntroContainer}>
            <View style={styles.aiAvatarWrapper}>
              <Image
                style={styles.aiAvatar}
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF_YsbGk_HZm0km5mY546fO3tdZsi-dS4QEOxuCDyKkWKxPHOoRL90CN3MlVk7KHiBeAKdTI4uDfmQ-hjUBsvJ0pu2eFR9hGrMT00IYVgAMv3nHiy0afHcNAy-DYo-Twgj0OlvYFl7vU6eWZO2ZifcKpBZGuhJB-RcCvPz6prtd1BeLcK_jf7yX7AlsXPDc2qK19ZmGncFzpmTq4YgDehsBi3JrJNB849Ks0vQi0sDLJxKs8TVHnC9H3CB7rV3ZL_-fRKdrIt8pg' }}
              />
            </View>
            <View style={styles.aiListeningBadge}>
              <Text style={styles.aiListeningText}>Nova is listening...</Text>
            </View>
          </View>

          {/* Chat History */}
          <View style={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <View
                key={msg.id}
                style={[
                  styles.messageWrapper,
                  msg.role === 'user' ? styles.messageWrapperUser : styles.messageWrapperAssistant
                ]}
              >
                {msg.role === 'assistant' && (
                  <View style={styles.messageAvatarContainer}>
                    <Image
                      style={styles.messageAvatar}
                      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUWEAhNY9ayoIQ9i5um_Yu7XZUZHf0YCUge185gZxAFVoRjRYtGKXfLCuVavmFnxkklEmn9pgYtwAlUMPOsczNJPAobsGlRctWy58ffxKLbKE-MBufJU6HDzxi-1KLQ5xSH-GAfOJrfEWJ8wIpOoIZ1pmErFa25jGV7DLPxcdrvV6IX3QGwDxLvODz-8yWO5xrrY6lze-SEkWIm1P8gBcW4Kjpe_cRH5xd_axfMNOp2lmU1K0Ti1yMgrYpKzGWZ6PylzP5OrXt8g' }}
                    />
                  </View>
                )}

                <View style={[
                  styles.messageBubble,
                  msg.role === 'user' ? styles.userBubble : styles.assistantBubble,
                  msg.role === 'assistant' && idx === messages.length - 1 ? styles.latestAssistantBubble : null
                ]}>
                  <Text style={[
                    styles.messageText,
                    msg.role === 'user' ? styles.userMessageText : styles.assistantMessageText,
                    msg.role === 'assistant' && idx === messages.length - 1 ? styles.latestAssistantMessageText : null
                  ]}>
                    {msg.content}
                  </Text>
                </View>
              </View>
            ))}

            {isLoading && (
              <View style={[styles.messageWrapper, styles.messageWrapperAssistant]}>
                <View style={styles.messageAvatarContainer}>
                  <Image style={styles.messageAvatar} source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUWEAhNY9ayoIQ9i5um_Yu7XZUZHf0YCUge185gZxAFVoRjRYtGKXfLCuVavmFnxkklEmn9pgYtwAlUMPOsczNJPAobsGlRctWy58ffxKLbKE-MBufJU6HDzxi-1KLQ5xSH-GAfOJrfEWJ8wIpOoIZ1pmErFa25jGV7DLPxcdrvV6IX3QGwDxLvODz-8yWO5xrrY6lze-SEkWIm1P8gBcW4Kjpe_cRH5xd_axfMNOp2lmU1K0Ti1yMgrYpKzGWZ6PylzP5OrXt8g' }} />
                </View>
                <View style={[styles.messageBubble, styles.assistantBubble]}>
                  <ActivityIndicator size="small" color={theme.colors.primary} />
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Input Area */}
        <View style={styles.footer}>
          {/* Quick Reply Chips */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickReplyContainer} contentContainerStyle={styles.quickReplyContent}>
            <TouchableOpacity style={styles.quickReplyChip} onPress={() => handleQuickReply('Because they are very hot')}>
              <MaterialIcons name="local-fire-department" size={20} color={theme.colors['tertiary-container']} />
              <Text style={styles.quickReplyText}>Because they are very hot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickReplyChip} onPress={() => handleQuickReply('Like giant lightbulbs')}>
              <MaterialIcons name="lightbulb" size={20} color={theme.colors.primary} />
              <Text style={styles.quickReplyText}>Like giant lightbulbs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickReplyChip} onPress={() => handleQuickReply('They are made of magic')}>
              <MaterialIcons name="auto-awesome" size={20} color={theme.colors.tertiary} />
              <Text style={styles.quickReplyText}>They are made of magic</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Text Input Row */}
          <View style={styles.inputRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Type your message..."
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={() => sendMessage(inputText)}
            />
            <TouchableOpacity
              style={[styles.sendBtn, !inputText.trim() && styles.sendBtnDisabled]}
              onPress={() => sendMessage(inputText)}
              disabled={!inputText.trim()}
            >
              <MaterialIcons name="send" size={24} color={theme.colors['on-primary']} />
            </TouchableOpacity>
          </View>

          {/* Voice Input Button */}
          <View style={styles.voiceContainer}>
            <TouchableOpacity style={styles.voiceBtn}>
              <MaterialIcons name="mic" size={48} color={theme.colors['on-primary']} />
            </TouchableOpacity>
            <Text style={styles.voiceLabel}>Tap to talk to Nova</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors['surface-container-lowest'],
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 4,
    borderBottomColor: '#f0f9ff',
    shadowColor: '#89cff0',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    zIndex: 50,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e0f2fe',
    backgroundColor: '#f0f9ff',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    fontWeight: '900',
    color: '#0ea5e9',
    fontSize: 20,
    letterSpacing: -0.5,
  },
  settingsBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: theme.spacing.margin,
    paddingBottom: 40,
  },
  aiIntroContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.margin,
    gap: theme.spacing.sm,
  },
  aiAvatarWrapper: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 6,
    borderColor: theme.colors['surface-container-lowest'],
    overflow: 'hidden',
    backgroundColor: theme.colors['primary-fixed-dim'],
    shadowColor: '#89cff0',
    shadowOpacity: 0.15,
    shadowRadius: 36,
    shadowOffset: { width: 0, height: 12 },
  },
  aiAvatar: {
    width: '100%',
    height: '100%',
  },
  aiListeningBadge: {
    backgroundColor: theme.colors['surface-container-lowest'],
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: theme.colors['primary-container'],
  },
  aiListeningText: {
    color: theme.colors['on-primary-container'],
    fontSize: 16,
    fontWeight: '600',
  },
  messagesContainer: {
    gap: 24,
  },
  messageWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
  },
  messageWrapperUser: {
    justifyContent: 'flex-end',
    paddingLeft: 48,
  },
  messageWrapperAssistant: {
    justifyContent: 'flex-start',
    paddingRight: 32,
    gap: 16,
  },
  messageAvatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: theme.colors['primary-container'],
    backgroundColor: theme.colors.surface,
    marginBottom: 4,
  },
  messageAvatar: {
    width: '100%',
    height: '100%',
  },
  messageBubble: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 32,
    maxWidth: '90%',
  },
  userBubble: {
    backgroundColor: theme.colors['primary-fixed'],
    borderBottomRightRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors['primary-fixed-dim'],
  },
  assistantBubble: {
    backgroundColor: theme.colors['surface-container-lowest'],
    borderBottomLeftRadius: 8,
    borderWidth: 3,
    borderColor: theme.colors['surface-container-high'],
  },
  latestAssistantBubble: {
    borderColor: theme.colors['primary-container'],
    shadowColor: '#89cff0',
    shadowOpacity: 0.08,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 12 },
  },
  messageText: {
    fontSize: 20,
    lineHeight: 30,
  },
  userMessageText: {
    color: theme.colors['on-primary-fixed'],
  },
  assistantMessageText: {
    color: theme.colors['on-surface'],
  },
  latestAssistantMessageText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    color: theme.colors['on-primary-container'],
  },
  footer: {
    backgroundColor: theme.colors['surface-container-lowest'],
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopWidth: 2,
    borderTopColor: theme.colors['surface-container'],
    paddingTop: 24,
    paddingBottom: 32,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: -12 },
  },
  quickReplyContainer: {
    marginBottom: 16,
  },
  quickReplyContent: {
    gap: 12,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  quickReplyChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 32,
    backgroundColor: theme.colors.surface,
    borderWidth: 2,
    borderColor: theme.colors['surface-container-highest'],
  },
  quickReplyText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors['on-surface'],
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: theme.colors['surface-container-low'],
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors['surface-container-highest'],
  },
  sendBtn: {
    backgroundColor: theme.colors.primary,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    backgroundColor: theme.colors['surface-container-highest'],
  },
  voiceContainer: {
    alignItems: 'center',
    gap: 8,
  },
  voiceBtn: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
    borderBottomColor: theme.colors['on-primary-fixed-variant'],
    shadowColor: '#0d6683',
    shadowOpacity: 0.25,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 12 },
  },
  voiceLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.outline,
  }
});
