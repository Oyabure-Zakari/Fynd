import React from "react";
import { Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';


export default function index() {
  return (
<Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/images/onboarding1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
  ]}
/>
  )
}