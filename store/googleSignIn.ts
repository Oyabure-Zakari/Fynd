import { WEB_CLIENT_ID } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { create } from "zustand";

type UserInfoType = {
  email: string;
  id: string | null;
  name: string | null;
  photo: string | null;
  givenName: string | null;
  familyName: string | null;
};

type GoogleSignInType = {
  error: string;
  idToken: string;
  userInfo: UserInfoType;
  signInWithGoogle: () => Promise<void>;
  checkIdToken: () => Promise<void>;
  removeIdToken: () => Promise<void>;
};

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID, 
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
  offlineAccess: true, 
  forceCodeForRefreshToken: false, 
  profileImageSize: 120, 
});

export const useGoogleSignInStore = create<GoogleSignInType>()((set) => ({
  error: "",
  idToken: "",
  userInfo: {
    id: "",
    name: "",
    photo: "",
    email: "",
    givenName: "",
    familyName: "",
  },

  signInWithGoogle: async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        if (!response.data.idToken) {
          console.log("No idToken found");
          return;
        }
        await AsyncStorage.setItem("@idToken", response.data.idToken);
        set({ idToken: response.data.idToken, userInfo: response.data.user });
        console.log("User signed in successfully");
        console.log("AsyncStorage: idToken saved");
      } else {
        // sign in was cancelled by user
        set({ error: "SignIn cancelled" });
        console.log("SignIn was cancelled by user");
      }
    } catch (error: any) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            console.log("SignIn in progress");
            set({ error: "SignIn in progress" });
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            console.log("Play services not available or outdated");
            set({ error: "Play services not available or outdated" });
            break;
          default:
            // some other error happened
            console.log(`Error signing in: ${error.message}`);
            set({ error: error.message });
        }
      } else {
        // an error that's not related to google sign in occurred
        console.log(`Error signing in: ${error.message}`);
        set({ error: error.message });
      }
    }
  },

  checkIdToken: async () => {
    // get token from async storage
    const token = await AsyncStorage.getItem("@idToken");
    try {
      if (token) {
        // update idToken
        set({ idToken: token });
        console.log("AsyncStorage: idToken saved");
      }
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  removeIdToken: async () => {
    try {
      await AsyncStorage.removeItem("@idToken");
      set({ idToken: "" });
      console.log("AsyncStorage: idToken removed");
    } catch (error: any) {
      set({ error: error.message });
    }
  },
}));
