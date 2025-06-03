import React from "react";

import { COLORS } from "@/constants/Colors";
import { IMAGES } from "@/constants/Images";

import Onboarding from "react-native-onboarding-swiper";

import OnboardImage from "./OnboardImage";
import { doneButton, nextButton, skipButton } from "./OnboardingButtons";
import OnboardingSubtitle from "./OnboardingSubtitle";
import OnboardingTitle from "./OnboardingTitle";

export default function OnboardingUI() {
  return (
    <Onboarding
      bottomBarColor={COLORS.white}
      SkipButtonComponent={skipButton}
      NextButtonComponent={nextButton}
      DoneButtonComponent={doneButton}
      pages={[
        {
          backgroundColor: COLORS.white,
          image: <OnboardImage source={IMAGES.onboard1} />,
          title: <OnboardingTitle title={"Welcome to Your Interactive Map"} />,
          subtitle: (
            <OnboardingSubtitle
              subTitle={
                "Explore your surroundings with our dynamic map view. Zoom, pan, and tap to discover nearby places. Get a clear picture of the world  around you, start exploring now!"
              }
            />
          ),
        },

        {
          backgroundColor: COLORS.white,
          image: <OnboardImage source={IMAGES.onboard2} />,
          title: <OnboardingTitle title={"Know Exactly Where You Are"} />,
          subtitle: (
            <OnboardingSubtitle
              subTitle={
                "See your real-time location marked on the map with a bright, easy to spot pin. Stay oriented and plan your next move with confidence."
              }
            />
          ),
        },

        {
          backgroundColor: COLORS.white,
          image: <OnboardImage source={IMAGES.onboard3} />,
          title: <OnboardingTitle title={"Find Any Place, Fast"} />,
          subtitle: (
            <OnboardingSubtitle
              subTitle={
                "Type in an address, business, or landmark to instantly locate your destination. Our smart search makes  it easy to plan your journey or discover new spots."
              }
            />
          ),
        },

        {
          backgroundColor: COLORS.white,
          image: <OnboardImage source={IMAGES.onboard4} />,
          title: <OnboardingTitle title={"Take Control as  an Admin"} />,
          subtitle: (
            <OnboardingSubtitle
              subTitle={
                "Add new locations to the map by  uploading coordinates. Customize the  map for your team or community,  ensuring every key spot is just a  tap away."
              }
            />
          ),
        },
      ]}
    />
  );
}
