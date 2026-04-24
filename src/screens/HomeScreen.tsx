import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* TopAppBar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDue7VoVr4L2mxc2S2I7wyRoVXF_N44iQatDypoIAcUehuGzsRwRXcxeQzrHU-sPVLzdHuPaYHLnGxfILgqQlyuVw3U9i0H2L8bp3sxeTBqnb5DYbETsc85ltCjlkzENziEr81epXsuiD5vNHvHZlpdwD6at9u8E4GtaT3eGhKSNAWDNHXyBezWdU5PCN7NJ5VXF949zH9tHun8X8lFDdzFCQCutiphxNzv-bBijP2BAXzS00qNOL9pvzCn5OtINl6TBT2KyBPj7g' }}
            />
          </View>
          <Text style={styles.headerTitle}>Little Thinker</Text>
          <TouchableOpacity style={styles.settingsBtn}>
            <MaterialIcons name="settings" size={28} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        {/* Greeting Section */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Hi, Leo! 👋</Text>
          <Text style={styles.greetingSubtitle}>Ready to explore today?</Text>
        </View>

        {/* Current Topic Card */}
        <View style={styles.topicCard}>
          <View style={styles.topicHeader}>
            <View style={styles.topicIconContainer}>
              <Image
                style={styles.topicIcon}
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxwpa3CgAXGISQP2MFW8x78DjTcZ1igMpGMZJgGOz8SZfbZ9UMTv6nzlvY1guqPNWeVtRHwo6fQzglt558oL5fZ5Io_mHIun8m5iwoA8wMtLhaqVZ_N_PRCgxVkJL9WMTgBfzkL7qh-o3hfAgFcc_uaKoI8k04dDMchzPU-jLrZK5wv9l63gBvXSN3fHz8jWy75c3ubNs43ztz9kMClubzVffkqYBzz6-SbyfH5wSWa_kVXtoC-ye32kd680qtvprWGT2jz2IHzg' }}
              />
            </View>
            <View style={styles.topicContent}>
              <View style={styles.topicBadge}>
                <Text style={styles.topicBadgeText}>Current Topic</Text>
              </View>
              <Text style={styles.topicTitle}>Space Exploration</Text>
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarFill} />
              </View>
              <Text style={styles.progressText}>60% Complete - Keep it up!</Text>
            </View>
          </View>

          <View style={styles.continueSection}>
            <TouchableOpacity style={styles.continueBtn}>
              <Text style={styles.continueBtnText}>Continue Learning</Text>
              <MaterialIcons name="arrow-forward" size={24} color={theme.colors['on-primary-container']} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's Challenge Card */}
        <View style={styles.challengeCard}>
          <View style={styles.challengeHeader}>
            <Text style={styles.challengeTitle}>Today's Challenge</Text>
            <MaterialIcons name="star" size={32} color={theme.colors.tertiary} />
          </View>
          <Text style={styles.challengeDescription}>Find 3 objects that are blue in your room!</Text>
          <TouchableOpacity style={styles.challengeBtn}>
            <Text style={styles.challengeBtnText}>Let's Go!</Text>
            <MaterialIcons name="search" size={24} color={theme.colors['on-tertiary']} />
          </TouchableOpacity>
        </View>

        {/* Start New Discovery FAB */}
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab}>
            <MaterialIcons name="upload" size={40} color={theme.colors['on-primary']} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.margin,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors['surface-container-lowest'],
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 32,
    borderBottomWidth: 4,
    borderBottomColor: '#f0f9ff',
    shadowColor: '#89cff0',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: theme.spacing.md,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: theme.colors['primary-container'],
  },
  headerTitle: {
    fontWeight: '900',
    color: '#0ea5e9', // sky-500
    fontSize: 20,
    letterSpacing: -0.5,
  },
  settingsBtn: {
    padding: 8,
  },
  greetingSection: {
    paddingTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,
  },
  greetingTitle: {
    fontSize: 40,
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  greetingSubtitle: {
    fontSize: 20,
    color: theme.colors['on-surface-variant'],
    marginBottom: theme.spacing.lg,
  },
  topicCard: {
    backgroundColor: theme.colors['surface-container-lowest'],
    borderRadius: 24,
    borderWidth: 2,
    borderColor: theme.colors['primary-container'],
    padding: theme.spacing.margin,
    marginBottom: theme.spacing.gutter,
    shadowColor: '#89cff0',
    shadowOpacity: 0.15,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.margin,
  },
  topicIconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.colors['surface-container-low'],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: theme.colors['surface-container'],
  },
  topicIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  topicContent: {
    flex: 1,
  },
  topicBadge: {
    backgroundColor: theme.colors['tertiary-container'],
    alignSelf: 'flex-start',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: 16,
    marginBottom: theme.spacing.base,
  },
  topicBadgeText: {
    color: theme.colors['on-tertiary-container'],
    fontSize: 16,
    fontWeight: '600',
  },
  topicTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: theme.colors['on-surface'],
    marginBottom: theme.spacing.sm,
  },
  progressBarContainer: {
    width: '100%',
    backgroundColor: theme.colors['surface-container-highest'],
    borderRadius: 8,
    height: 16,
    marginBottom: theme.spacing.xs,
  },
  progressBarFill: {
    backgroundColor: theme.colors.secondary,
    width: '60%',
    height: '100%',
    borderRadius: 8,
  },
  progressText: {
    fontSize: 14,
    color: theme.colors.outline,
    textAlign: 'right',
  },
  continueSection: {
    marginTop: theme.spacing.margin,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 2,
    borderTopColor: theme.colors['surface-container'],
    borderStyle: 'dashed',
    alignItems: 'flex-end',
  },
  continueBtn: {
    backgroundColor: theme.colors['primary-container'],
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.margin,
    paddingVertical: theme.spacing.sm,
    borderRadius: 24,
    borderBottomWidth: 4,
    borderBottomColor: '#6cbce2',
    gap: theme.spacing.sm,
  },
  continueBtnText: {
    color: theme.colors['on-primary-container'],
    fontSize: 20,
    fontWeight: '600',
  },
  challengeCard: {
    backgroundColor: theme.colors['tertiary-fixed'],
    borderRadius: 24,
    borderWidth: 2,
    borderColor: theme.colors['tertiary-container'],
    padding: theme.spacing.margin,
    marginBottom: theme.spacing.lg,
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.base,
  },
  challengeTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors['on-tertiary-container'],
  },
  challengeDescription: {
    fontSize: 20,
    color: theme.colors['on-surface-variant'],
    marginBottom: theme.spacing.margin,
  },
  challengeBtn: {
    backgroundColor: theme.colors.tertiary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.margin,
    paddingVertical: theme.spacing.sm,
    borderRadius: 24,
    borderBottomWidth: 4,
    borderBottomColor: '#5a4400',
    gap: theme.spacing.sm,
  },
  challengeBtnText: {
    color: theme.colors['on-tertiary'],
    fontSize: 20,
    fontWeight: '600',
  },
  fabContainer: {
    alignItems: 'flex-end',
  },
  fab: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0d6683',
    shadowOpacity: 0.3,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 12 },
    borderBottomWidth: 6,
    borderBottomColor: '#0a4d63',
  }
});
