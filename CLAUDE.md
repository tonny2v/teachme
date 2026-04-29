# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Little Thinker** — an educational AI tutor mobile app for children, built with React Native (Expo SDK 54). The app lets kids scan textbook pages, chat with an AI character ("Nova"), and review learning materials (mind maps, flashcards, quizzes).

## Commands

```bash
# Development
npx expo start              # Start dev server (all platforms)
npx expo start --web        # Web only
npx expo start --android    # Android
npx expo start --ios        # iOS

# No test runner or linter is configured yet
```

## Architecture

Expo managed project with React Navigation bottom tabs. No native folders (`ios/`, `android/`) are committed — Expo handles native builds.

```
App.tsx                        # Root: loads MaterialIcons font, wraps in NavigationContainer + SafeAreaProvider
index.ts                       # Entry point, registers root component
src/
  theme.ts                     # Material Design 3 color tokens + spacing/borderRadius constants
  navigation/TabNavigator.tsx  # Bottom tab navigator (Home, Chat, Scan, Library)
  screens/
    HomeScreen.tsx             # Dashboard: greeting, current topic progress, daily challenge, upload FAB
    ChatScreen.tsx             # AI chat with "Nova" — calls Alibaba Qwen API via OpenAI-compatible endpoint
    UploadScreen.tsx           # Camera/upload flow for scanning textbooks
    MaterialsScreen.tsx        # Learning materials: mind map, flashcards, mini quiz
```

## Key Details

- **AI backend**: Chat screen calls `EXPO_PUBLIC_ALI_BASE_URL` (Alibaba DashScope Qwen3-Plus) via OpenAI-compatible `/chat/completions` endpoint. API key expected in `EXPO_PUBLIC_ALI_API_KEY` env var.
- **Theming**: All screens use `src/theme.ts` — Material Design 3 color token names (e.g. `surface-container-lowest`, `on-primary-fixed-variant`). Styling is entirely inline `StyleSheet.create` per screen file.
- **New Architecture enabled**: `app.json` has `"newArchEnabled": true`.
- **TypeScript strict mode** is enabled via tsconfig.
- **Web support** is configured via `react-native-web` + `@expo/metro-runtime`.
