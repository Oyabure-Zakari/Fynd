import React, { useEffect } from "react";
import { View } from "react-native";

import AdminImage from "./AdminImage";
import AdminLoginBtn from "./AdminLoginBtn";
import AdminWriteUp from "./AdminWriteUp";
import Divider from "./Divider";
import PasswordForm from "./PasswordForm";
import UserNameForm from "./UserNameForm";

import GoogleButton from "@/components/reuseableComponents/GoogleButton";
import { useLoginAdminStore } from "@/store/loginAdmin";
import styles from "@/styles/auth.styles";

export default function Admin() {;
  const adminToken = useLoginAdminStore((state) => state.adminToken);
  const checkAdminToken = useLoginAdminStore((state) => state.checkAdminToken);

  // check if the admin token is already set
  useEffect(() => {
    checkAdminToken();
  }, []);

  return (
    <View style={styles.adminContainer}>
      {/* admin image */}
      <AdminImage/>

      {/* text input */}
      <View style={styles.inputFieldContainer}>
        {/* userName text input */}
        <UserNameForm/>
        
        {/* divider */}
        <Divider/>

        {/* password text input */}
        <PasswordForm/>

        {/* divider */}
        <Divider/>

        {/* login button */}
        <AdminLoginBtn/>
      </View>

      {/* admin text */}
      <AdminWriteUp/>

      {/* Sign in with Google button */}
      {adminToken && <GoogleButton />}
    </View>
  );
}
