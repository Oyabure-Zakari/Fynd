import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand';

type appLaunchedType = {
  error: string;
  appLaunched: string;
  launchApp: () => Promise<void>
  checkAppLaunch: () => Promise<void>;
}

export const useAppLaunchedStore = create<appLaunchedType>()((set) => ({
  error: "",
  appLaunched: "",
  
  launchApp: async () => {
    try {
      const launched = "true"
      if (!launched) return;
      await AsyncStorage.setItem("@appLaunchedToken", launched);
      set({ appLaunched: launched });
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
}))