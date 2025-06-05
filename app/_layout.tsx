import SafeScreen from '@/components/SafeScreen';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
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
      <StatusBar style="light" />
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
