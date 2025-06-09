import OnboardingUI from "@/components/onboarding/OnboardingUI";
import { useAppLaunchedStore } from "@/store/appLaunched";
import React from "react";

export default function index() {
  const isCheckingLaunch = useAppLaunchedStore((state) => state.isCheckingLaunch); 
  
  if (isCheckingLaunch) return null; // if the app has already launched, redirect to the auth screen
  return (
    <OnboardingUI/>
  );
}
