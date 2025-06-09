import { ADMIN_TOKEN } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type loginAdminType = {
  error: string;
  userName: string;
  password: string;
  adminToken: string;
  setUserName: (userName: string) => void
  setPassword: (password: string) => void 
  loginAdmin: () => Promise<void>;
  checkAdminToken: () => Promise<void>;
  logoutAdmin: () => Promise<void>;
};

export const useLoginAdminStore = create<loginAdminType>()((set, get) => ({
  error: "",
  userName: "",
  password: "",
  adminToken: "",
  setUserName: (userName) => set({userName}),
  setPassword: (password) => set({password}),

  loginAdmin: async () => {
    try {
      if (!ADMIN_TOKEN) {
        set({ error: "Admin token is not set" });
        return;
      }
      // save the admin token to AsyncStorage
      await AsyncStorage.setItem("@adminToken", ADMIN_TOKEN);
      set({ adminToken: ADMIN_TOKEN, error: "" });
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  // check if the admin token is already set
  checkAdminToken: async () => {
    try {
      const token = await AsyncStorage.getItem("@adminToken");
      if (!token) return;
      set({ adminToken: token, error: "" });
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  logoutAdmin: async () => {
    try {
      await AsyncStorage.removeItem("@adminToken");
      set({ adminToken: "", error: "" });
    } catch (error: any) {
      set({ error: error.message });
    }
  },
}));
