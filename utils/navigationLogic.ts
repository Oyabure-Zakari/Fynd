import { Router } from "expo-router";

type RouteSegmentType =
  | ["_sitemap"]
  | ["(auth)"]
  | ["(onboarding)"]
  | ["(tabs)"]
  | ["Explore"]
  | ["(tabs)", "Explore"]
  | ["Upload"]
  | ["(tabs)", "Upload"];

export const appLaunchedNavigationLogic = ( launched: string, router: Router, segments: RouteSegmentType ) => {
  const hasLaunchedApp = launched;
  const isInOnboardingScreen = segments[0] === "(onboarding)";

  if (!hasLaunchedApp && !isInOnboardingScreen) {
    router.replace("/(onboarding)");
  } else if (hasLaunchedApp && isInOnboardingScreen) {
    router.replace("/(auth)");
  }
};

export const googleSignInNavigationLogic = ( idToken: string, router: Router, segments: RouteSegmentType ) => {
  const userToken = idToken;
  const isInAuthScreen = segments[0] === "(auth)";

  if (!userToken && !isInAuthScreen) {
    router.replace("/(auth)");
  } else if (userToken && isInAuthScreen) {
    router.replace("/(tabs)");
  }
};
