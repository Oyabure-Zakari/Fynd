import SafeScreen from "@/components/SafeScreen";
import { COLORS } from "@/constants/Colors";
import { useAppLaunchedStore } from "@/store/appLaunched";

import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

import { StatusBar } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  const launched = useAppLaunchedStore((state) => state.appLaunched);
  const checkAppLaunch = useAppLaunchedStore((state) => state.checkAppLaunch);

  const [loaded] = useFonts({
    primaryFont: require("../assets/fonts/CoolveticaRg-Regular.ttf"),
    secondaryFont: require("../assets/fonts/SegoeUI-Bold.ttf"),
  });

  useEffect(() => {
    // updates the appLaunched state immediately the app is launched
    checkAppLaunch();
  }, []);

  useEffect(() => {
    if (loaded) {
      // Only navigate after fonts are loaded and Stack is rendered
      const hasLaunchedApp = launched;
      const isInOnboardingScreen = segments[0] === "(onboarding)";

      if (!hasLaunchedApp && !isInOnboardingScreen)
        router.replace("/(onboarding)");
      else if (hasLaunchedApp && isInOnboardingScreen) router.replace("/(auth)");

      SplashScreen.hideAsync();
    }
  }, [loaded, launched, segments]);

    if (!loaded) {
    // Aysnc font loading is still in progress
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <SafeScreen>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="(onboarding)"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="(auth)"
              options={{ headerShown: false }}
            />
          </Stack>
        </GestureHandlerRootView>
      </SafeScreen>
    </SafeAreaProvider>
  );
}
