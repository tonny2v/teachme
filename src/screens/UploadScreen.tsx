import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

export default function UploadScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* TopAppBar */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <MaterialIcons name="face" size={24} color={theme.colors['on-tertiary-container']} />
          </View>
          <Text style={styles.headerTitle}>Little Thinker</Text>
        </View>
        <TouchableOpacity style={styles.settingsBtn}>
          <MaterialIcons name="settings" size={28} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Illustration Area */}
        <View style={styles.heroSection}>
          <View style={styles.heroImageContainer}>
            <ImageBackground
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC37n2JVl1c8UQmaPNNAoL_FD6uEIQgYxOWjXoP_Ac_cmhZq53HkvDpXRazcusr5ndwRriDzx4L2jm8guujhov78loTyxFd_KNrQ5KFeNCaTOvxoLCDHz2FBn6mYZNMXOOICv5AXoOtHMcRqDQbSnq3To0FfJDzzz6B3cChRhLQ91qLVRd57nrVQXVcfmjn0zin5Ro_7l1pCY9tNC38tueTXmWLxxiadaBC6Umj0EI_Ft-svh03kxQgfYXj0xJC5ZVK0zQNMGNdVQ' }}
              style={styles.heroImage}
              imageStyle={{ borderRadius: 96 }}
            />
          </View>
          <Text style={styles.heroTitle}>What are we learning today?</Text>
          <Text style={styles.heroSubtitle}>Scan your textbook or homework to start a new adventure!</Text>
        </View>

        {/* Upload Options (Bento Grid) */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.primaryActionBtn}>
            <View style={styles.primaryIconContainer}>
              <MaterialIcons name="photo-camera" size={40} color={theme.colors['on-primary']} />
            </View>
            <Text style={styles.primaryActionText}>Take a Photo</Text>
          </TouchableOpacity>

          <View style={styles.secondaryActionsContainer}>
            <TouchableOpacity style={styles.secondaryActionBtn}>
              <MaterialIcons name="upload-file" size={32} color={theme.colors.primary} />
              <Text style={styles.secondaryActionText}>Upload File</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tertiaryActionBtn}>
              <MaterialIcons name="photo-library" size={32} color={theme.colors['on-secondary-container']} />
              <Text style={styles.tertiaryActionText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Uploads List */}
        <View style={styles.recentSection}>
          <Text style={styles.recentTitle}>Recent Scans</Text>

          {/* Card 1: Ready */}
          <TouchableOpacity style={styles.recentCard}>
            <View style={styles.recentCardLeft}>
              <View style={[styles.recentIconContainer, { backgroundColor: '#d1fae5' }]}>
                <MaterialIcons name="calculate" size={24} color={theme.colors.secondary} />
              </View>
              <View>
                <Text style={styles.recentCardTitle}>Math Homework</Text>
                <Text style={styles.recentCardTime}>Just now</Text>
              </View>
            </View>
            <View style={styles.statusBadgeReady}>
              <MaterialIcons name="check-circle" size={16} color={theme.colors['on-secondary-container']} />
              <Text style={styles.statusBadgeTextReady}>Ready</Text>
            </View>
          </TouchableOpacity>

          {/* Card 2: Analyzing */}
          <TouchableOpacity style={[styles.recentCard, { opacity: 0.8 }]}>
            <View style={styles.recentCardLeft}>
              <View style={[styles.recentIconContainer, { backgroundColor: '#fef3c7' }]}>
                <MaterialIcons name="science" size={24} color={theme.colors.tertiary} />
              </View>
              <View>
                <Text style={styles.recentCardTitle}>Science Pg 42</Text>
                <Text style={styles.recentCardTime}>2 mins ago</Text>
              </View>
            </View>
            <View style={styles.statusBadgeAnalyzing}>
              <MaterialIcons name="autorenew" size={16} color={theme.colors['on-surface-variant']} />
              <Text style={styles.statusBadgeTextAnalyzing}>Analyzing</Text>
            </View>
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
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors['tertiary-container'],
    borderWidth: 2,
    borderColor: theme.colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: '900',
    color: '#0ea5e9',
    fontSize: 20,
    letterSpacing: -0.5,
  },
  settingsBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  scrollContent: {
    padding: theme.spacing.margin,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.margin,
  },
  heroImageContainer: {
    width: 192,
    height: 192,
    borderRadius: 96,
    backgroundColor: theme.colors['primary-container'],
    borderWidth: 4,
    borderColor: '#ffffff',
    shadowColor: '#89cff0',
    shadowOpacity: 0.4,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: theme.colors['on-surface'],
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: theme.colors['on-surface-variant'],
    textAlign: 'center',
    maxWidth: 300,
  },
  gridContainer: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  primaryActionBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    borderBottomWidth: 6,
    borderBottomColor: theme.colors['on-primary-fixed-variant'],
    shadowColor: '#0d6683',
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
  },
  primaryIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  primaryActionText: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors['on-primary'],
  },
  secondaryActionsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  secondaryActionBtn: {
    flex: 1,
    backgroundColor: theme.colors['surface-container-highest'],
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderBottomWidth: 4,
    borderBottomColor: theme.colors['surface-dim'],
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  secondaryActionText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors['on-surface'],
    textAlign: 'center',
    marginTop: 4,
  },
  tertiaryActionBtn: {
    flex: 1,
    backgroundColor: theme.colors['secondary-container'],
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderBottomWidth: 4,
    borderBottomColor: theme.colors['secondary-fixed-dim'],
    shadowColor: '#2c6956',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  tertiaryActionText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors['on-secondary-container'],
    textAlign: 'center',
    marginTop: 4,
  },
  recentSection: {
    gap: theme.spacing.sm,
  },
  recentTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors['on-background'],
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  recentCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: theme.colors['surface-container-high'],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  recentCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  recentIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors['on-surface'],
  },
  recentCardTime: {
    fontSize: 14,
    color: theme.colors.outline,
  },
  statusBadgeReady: {
    backgroundColor: theme.colors['secondary-container'],
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors['secondary-fixed-dim'],
    gap: 4,
  },
  statusBadgeTextReady: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors['on-secondary-container'],
  },
  statusBadgeAnalyzing: {
    backgroundColor: theme.colors['surface-container-high'],
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors['outline-variant'],
    gap: 8,
  },
  statusBadgeTextAnalyzing: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors['on-surface-variant'],
  }
});
