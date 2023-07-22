import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Modal,
  SafeAreaView,
} from "react-native";

import Main from "./main";
import SignUp from "./signupScreen";
import colors from "../colorPalette";

export default function Login() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleNextPress = () => {
    inputRef2.current.focus();
  };

  const handleDonePress = () => {
    Keyboard.dismiss();
  };

  const [showMain, setShowMain] = useState(false);
  const handleLogin = () => {
    setShowMain(true);
  };

  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.title}>HabiSun</Text>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.user}
            placeholder="User"
            ref={inputRef1}
            returnKeyType="next"
            onSubmitEditing={handleNextPress}
          />
          <TextInput
            style={styles.password}
            placeholder="Password"
            ref={inputRef2}
            returnKeyType="done"
            onSubmitEditing={handleDonePress}
          />
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.loginButton}>
              <Text>Login</Text>
            </View>
          </TouchableOpacity>
          {showMain && (
            <Modal animationType="slide" transparent>
              <Main />
            </Modal>
          )}
          <View style={styles.subContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signup}>Sign Up Here</Text>
              {showSignUp && (
                <Modal animationType="fade" transparent>
                  <SignUp login={handleSignUp} />
                </Modal>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: "100%",
    height: "100%",
    paddingTop: 124,
    paddingBottom: 75,
    paddingLeft: 75,
    paddingRight: 75,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: colors.accent,
    fontSize: 54,
    fontWeight: 700,
    marginBottom: 392,
    textAlign: "center",
  },
  loginContainer: {
    width: 278,
    height: 293,
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  user: {
    backgroundColor: "#FAF0CA",
    width: 278,
    height: 52,
    position: "absolute",
    borderRadius: 20,
    color: "#454545",
    textAlign: "center",
    fontSize: 14,
  },
  password: {
    backgroundColor: "#FAF0CA",
    width: 278,
    height: 52,
    position: "absolute",
    borderRadius: 20,
    marginTop: 68,
    color: "#454545",
    textAlign: "center",
    fontSize: 14,
  },
  loginButton: {
    width: 278,
    height: 52,
    position: "absolute",
    backgroundColor: colors.accent,
    borderRadius: 30,
    marginTop: 184,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    color: colors.background,
    fontSize: 14,
  },
  signupText: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "500",
  },
  subContainer: {
    flexDirection: "row",
    marginTop: 260,
    width: 236,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },
  signup: {
    color: colors.white,
    fontSize: 14,
    textDecorationLine: "underline",
    fontWeight: "700",
  },
});
