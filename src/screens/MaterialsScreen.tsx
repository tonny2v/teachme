import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

export default function MaterialsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* TopAppBar */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.avatarBtn}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC46vpRjjh5RSuOJC_kDhMga8gl46z1Gq5o8r6vJ2MOO3RG6XfQSQ2g2syCxKRWuqobEOXxPxQldo0o75_8KdfJ2SgrYD0GofgWNdh7sHTl5umWr5CVD2kxew9Zk9likO4OVs9XMLrESNc35LyfLw4nYqSN1VOsJ8hTPxi31zGvp3SQp3FE5docPz7qdD02jkmZrHH2Cuyu-EGHGLTZ3XDOXGssTuu6r4fl2Z-RTOZaQcFhmhEsBeGykuaJGDLFXrS6x6bWeLo5Ww' }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Little Thinker</Text>
        <TouchableOpacity style={styles.settingsBtn}>
          <MaterialIcons name="settings" size={28} color="#0ea5e9" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section: Treasure Chest Concept */}
        <View style={styles.heroSection}>
          <View style={styles.treasureIconContainer}>
            <MaterialIcons name="redeem" size={48} color={theme.colors.tertiary} />
          </View>
          <Text style={styles.heroTitle}>Your Treasure Chest!</Text>
          <Text style={styles.heroSubtitle}>Look at all the amazing things you learned about the Solar System today.</Text>
        </View>

        {/* Bento Grid Layout */}
        <View style={styles.gridContainer}>
          {/* Mind Map Card (Large) */}
          <View style={styles.mindMapCard}>
            <View style={styles.cardHeader}>
              <View style={styles.mindMapIconContainer}>
                <MaterialIcons name="account-tree" size={24} color={theme.colors.primary} />
              </View>
              <Text style={styles.mindMapTitle}>Mind Map</Text>
            </View>

            <View style={styles.mindMapContent}>
              <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' }}
                style={styles.mindMapBg}
                imageStyle={{ opacity: 0.2, borderRadius: 8 }}
              />
              <View style={styles.mindMapInteractiveArea}>
                <View style={styles.mindMapNodePrimary}>
                  <Text style={styles.mindMapNodePrimaryText}>The Solar System</Text>
                </View>
                <View style={styles.mindMapNodesRow}>
                  <View style={styles.mindMapNodeSecondary}>
                    <Text style={styles.mindMapNodeSecondaryText}>Planets</Text>
                  </View>
                  <View style={styles.mindMapNodeTertiary}>
                    <Text style={styles.mindMapNodeTertiaryText}>Sun</Text>
                  </View>
                  <View style={styles.mindMapNodeError}>
                    <Text style={styles.mindMapNodeErrorText}>Moons</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Flashcards (Medium) */}
          <View style={styles.flashcardCard}>
            <View style={styles.cardHeader}>
              <View style={styles.flashcardIconContainer}>
                <MaterialIcons name="style" size={24} color={theme.colors.secondary} />
              </View>
              <Text style={styles.flashcardTitle}>Flashcards</Text>
            </View>

            <TouchableOpacity style={styles.flashcardInteractiveArea}>
              <MaterialIcons name="public" size={64} color={theme.colors.secondary} style={{ marginBottom: 16 }} />
              <Text style={styles.flashcardMainText}>Earth</Text>
              <Text style={styles.flashcardSubText}>Tap to flip</Text>
            </TouchableOpacity>

            <View style={styles.paginationDots}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>

          {/* Mini Quiz (Medium) */}
          <View style={styles.quizCard}>
            <View style={styles.quizHeader}>
              <View style={styles.cardHeader}>
                <View style={styles.quizIconContainer}>
                  <MaterialIcons name="quiz" size={24} color={theme.colors.tertiary} />
                </View>
                <Text style={styles.quizTitle}>Mini Quiz</Text>
              </View>
              <View style={styles.starsContainer}>
                <MaterialIcons name="star" size={20} color={theme.colors['tertiary-fixed-dim']} />
                <MaterialIcons name="star" size={20} color={theme.colors['tertiary-fixed-dim']} />
                <MaterialIcons name="star" size={20} color={theme.colors['surface-variant']} />
              </View>
            </View>

            <View style={styles.quizContent}>
              <Text style={styles.quizQuestion}>Which planet is known as the Red Planet?</Text>
              <View style={styles.quizOptions}>
                <TouchableOpacity style={styles.quizOptionBtn}>
                  <Text style={styles.quizOptionText}>Earth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.quizOptionBtn, styles.quizOptionBtnCorrect]}>
                  <Text style={styles.quizOptionTextCorrect}>Mars</Text>
                  <MaterialIcons name="check-circle" size={20} color={theme.colors.tertiary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.quizOptionBtn}>
                  <Text style={styles.quizOptionText}>Jupiter</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.downloadBtn}>
            <MaterialIcons name="download" size={24} color={theme.colors['on-primary']} />
            <Text style={styles.downloadBtnText}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn}>
            <MaterialIcons name="share" size={24} color={theme.colors['on-surface']} />
            <Text style={styles.shareBtnText}>Share</Text>
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
  avatarBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: theme.colors['primary-container'],
    overflow: 'hidden',
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
    backgroundColor: theme.colors['surface-container-low'],
  },
  scrollContent: {
    padding: theme.spacing.margin,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  treasureIconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.colors['tertiary-fixed'],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
    shadowColor: '#0d6683',
    shadowOpacity: 0.15,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 20,
    color: theme.colors['on-surface-variant'],
    textAlign: 'center',
    maxWidth: '80%',
  },
  gridContainer: {
    gap: theme.spacing.gutter,
    marginBottom: theme.spacing.xl,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.margin,
  },
  mindMapCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    padding: theme.spacing.margin,
    borderWidth: 2,
    borderColor: theme.colors['primary-fixed'],
    shadowColor: '#0d6683',
    shadowOpacity: 0.15,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    overflow: 'hidden',
  },
  mindMapIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors['primary-fixed'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  mindMapTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  mindMapContent: {
    backgroundColor: theme.colors['surface-container-lowest'],
    borderRadius: 16,
    padding: theme.spacing.margin,
    minHeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors['surface-variant'],
    position: 'relative',
  },
  mindMapBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mindMapInteractiveArea: {
    alignItems: 'center',
    zIndex: 10,
  },
  mindMapNodePrimary: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 32,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  mindMapNodePrimaryText: {
    color: theme.colors['on-primary'],
    fontSize: 16,
    fontWeight: '600',
  },
  mindMapNodesRow: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  mindMapNodeSecondary: {
    backgroundColor: theme.colors['secondary-container'],
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  mindMapNodeSecondaryText: {
    color: theme.colors['on-secondary-container'],
    fontSize: 16,
    fontWeight: '600',
  },
  mindMapNodeTertiary: {
    backgroundColor: theme.colors['tertiary-container'],
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  mindMapNodeTertiaryText: {
    color: theme.colors['on-tertiary-container'],
    fontSize: 16,
    fontWeight: '600',
  },
  mindMapNodeError: {
    backgroundColor: theme.colors['error-container'],
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  mindMapNodeErrorText: {
    color: theme.colors['on-error-container'],
    fontSize: 16,
    fontWeight: '600',
  },
  flashcardCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    padding: theme.spacing.margin,
    borderWidth: 2,
    borderColor: theme.colors['secondary-fixed'],
    shadowColor: '#0d6683',
    shadowOpacity: 0.15,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
  },
  flashcardIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors['secondary-container'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.secondary,
  },
  flashcardInteractiveArea: {
    backgroundColor: theme.colors['secondary-fixed'],
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    borderBottomWidth: 4,
    borderBottomColor: '#0d503f',
    aspectRatio: 4/3,
  },
  flashcardMainText: {
    fontSize: 32,
    fontWeight: '600',
    color: theme.colors['on-secondary-container'],
    marginBottom: 8,
  },
  flashcardSubText: {
    fontSize: 18,
    color: theme.colors['on-secondary-fixed-variant'],
    opacity: 0.8,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors['surface-variant'],
  },
  dotActive: {
    backgroundColor: theme.colors.secondary,
  },
  quizCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    padding: theme.spacing.margin,
    borderWidth: 2,
    borderColor: theme.colors['tertiary-fixed'],
    shadowColor: '#0d6683',
    shadowOpacity: 0.15,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  quizIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors['tertiary-container'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.tertiary,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  quizContent: {
    justifyContent: 'center',
  },
  quizQuestion: {
    fontSize: 20,
    color: theme.colors['on-surface'],
    marginBottom: 24,
    textAlign: 'center',
  },
  quizOptions: {
    gap: 12,
  },
  quizOptionBtn: {
    backgroundColor: theme.colors['surface-container-low'],
    borderWidth: 2,
    borderColor: theme.colors['surface-variant'],
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  quizOptionBtnCorrect: {
    backgroundColor: theme.colors['tertiary-fixed'],
    borderColor: theme.colors.tertiary,
    borderBottomWidth: 4,
    borderBottomColor: '#594400',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quizOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors['on-surface'],
  },
  quizOptionTextCorrect: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors['on-tertiary-fixed'],
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.margin,
    marginTop: theme.spacing.xl,
  },
  downloadBtn: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    borderBottomWidth: 4,
    borderBottomColor: '#004d65',
    shadowColor: '#0d6683',
    shadowOpacity: 0.15,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
  },
  downloadBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors['on-primary'],
  },
  shareBtn: {
    backgroundColor: theme.colors['surface-container-high'],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: theme.colors['outline-variant'],
  },
  shareBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors['on-surface'],
  }
});
