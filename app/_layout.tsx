import SafeScreen from '@/components/SafeScreen';
import { COLORS } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [loaded] = useFonts({
    primaryFont: require('../assets/fonts/CoolveticaRg-Regular 400.ttf'),
    secondaryFont: require('../assets/fonts/Segoe UI Bold.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={{ height: 40, backgroundColor: COLORS.white, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }} />
      <StatusBar style="dark"/>
      <SafeScreen>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
      </SafeScreen>
    </SafeAreaProvider>
  );
}
