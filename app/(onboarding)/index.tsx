import { COLORS } from "@/constants/Colors";
import { IMAGES } from "@/constants/Images";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function index() {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: COLORS.white,
          image: <Image style={styles.onboardImage} source={IMAGES.onboard1} />,
          title: "Welcome to Your Interactive Map",
          subtitle:
            "Explore your surroundings with our  dynamic map view. Zoom, pan, and tap to discover nearby places.  Get a clear picture of the world  around you, start exploring now!",
        },
        {
          backgroundColor: COLORS.white,
          image: <Image style={styles.onboardImage} source={IMAGES.onboard2} />,
          title: "Know Exactly Where You Are",
          subtitle:
            "See your real-time location marked on the map with a bright, easy to spot pin. Stay oriented and plan  your next move with confidence.",
        },
        {
          backgroundColor: COLORS.white,
          image: <Image style={styles.onboardImage} source={IMAGES.onboard3} />,
          title: "Find Any Place, Fast",
          subtitle:
            "Type in an address, business, or  landmark to instantly locate your  destination. Our smart search makes  it easy to plan your journey  or discover new spots.",
        },
        {
          backgroundColor: COLORS.white,
          image: <Image style={styles.onboardImage} source={IMAGES.onboard4} />,
          title: "Take Control as an Admin",
          subtitle:
            "Add new locations to the map by uploading coordinates. Customize the map for your team or community,  ensuring every key spot is just a  tap away.",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  onboardImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
