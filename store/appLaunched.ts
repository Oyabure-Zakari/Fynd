import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand';

type appLaunchedType = {
  error: string;
  appLaunched: string;
  launchApp: () => Promise<void>
  checkAppLaunch: () => Promise<void>;
  // removeAppLaunch: () => Promise<void>;
}

export const useAppLaunchedStore = create<appLaunchedType>()((set) => ({
  error: "",
  appLaunched: "",
  
  launchApp: async () => {
    try {
      const launched = "true"
      await AsyncStorage.setItem("@appLaunchedToken", launched);
      set({ appLaunched: launched, error: "" }); // Update the state with the new value
      console.log("App launch token set successfully.");
    } catch (error:any) {
      set({ error: error.message })
    }
  },

  checkAppLaunch: async () => {
    try {
      const appHasLaunched = await AsyncStorage.getItem("@appLaunchedToken");
      if (!appHasLaunched) return;
      set({ appLaunched: appHasLaunched });
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  // removeAppLaunch: async () => {
  //   try {
  //     await AsyncStorage.removeItem("@appLaunchedToken");
  //     console.log("App launch token removed successfully.");
  //     set({ appLaunched: "" }); // Reset the appLaunched state
  //   } catch (error: any) {
  //     set({ error: error.message });
  //   }
  // },
}))