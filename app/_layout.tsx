import SafeScreen from "@/components/SafeScreen";
import { COLORS } from "@/constants/Colors";
import { useAppLaunchedStore } from "@/store/appLaunched";
import { useGoogleSignInStore } from "@/store/googleSignIn";
import {
  appLaunchedNavigationLogic,
  googleSignInNavigationLogic,
} from "@/utils/navigationLogic";

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

  // app launch
  const launched = useAppLaunchedStore((state) => state.appLaunched);
  const checkAppLaunch = useAppLaunchedStore((state) => state.checkAppLaunch);

  // google signin
  const idToken = useGoogleSignInStore((state) => state.idToken);
  const checkIdToken = useGoogleSignInStore((state) => state.checkIdToken);

  const [loaded] = useFonts({
    primaryFont: require("../assets/fonts/CoolveticaRg-Regular.ttf"),
    secondaryFont: require("../assets/fonts/SegoeUI-Bold.ttf"),
  });

  // handles checks
  useEffect(() => {
    checkAppLaunch(); // checks if app has launched before
    checkIdToken(); // checks if google id token is set
  }, []);

  // handles font load
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // handles app launched navigation logic
  useEffect(() => {
    if (loaded) {
      appLaunchedNavigationLogic(launched, router, segments);
    }
  }, [loaded, launched, segments]);

  // handles google sign navigation logic
  useEffect(() => {
    if (loaded) {
      googleSignInNavigationLogic(idToken, router, segments);
    }
  }, [loaded, idToken, segments]);

  // Aysnc font loading is still in progress
  if (!loaded) {
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
