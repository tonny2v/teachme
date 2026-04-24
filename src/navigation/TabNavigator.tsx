import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import UploadScreen from '../screens/UploadScreen';
import MaterialsScreen from '../screens/MaterialsScreen';
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderTopWidth: 2,
          borderTopColor: '#f0f9ff',
          height: 90,
          paddingBottom: 24,
          paddingTop: 12,
          position: 'absolute',
          bottom: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.04,
          shadowRadius: 30,
          shadowOffset: { width: 0, height: -8 },
        },
        tabBarActiveTintColor: '#0284c7', // sky-600
        tabBarInactiveTintColor: '#94a3b8', // slate-400
        tabBarLabelStyle: {
          fontFamily: 'sans-serif-medium',
          fontSize: 12,
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={UploadScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="add-a-photo" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={MaterialsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="auto-stories" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
