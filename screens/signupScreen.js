import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HabiSun</Text>
      <View style={styles.loginContainer}>
        <TextInput style={styles.user} placeholder="User" />
        <TextInput style={styles.password} placeholder="Password" />
        <TextInput style={styles.rePassword} placeholder="Re-type Password" />
        <TouchableOpacity>
          <View style={styles.loginButton}>
            <Text>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: 328,
            width: 236,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 22,
          }}
        >
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                textDecorationLine: "underline",
                fontWeight: "700",
              }}
            >
              Login Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041425",
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
    color: "#E9D2F4",
    fontSize: 54,
    fontWeight: 700,
    marginBottom: 324,
  },
  loginContainer: {
    width: 278,
    height: 361,
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
  rePassword: {
    backgroundColor: "#FAF0CA",
    width: 278,
    height: 52,
    position: "absolute",
    borderRadius: 20,
    marginTop: 136,
    color: "#454545",
    textAlign: "center",
    fontSize: 14,
  },
  loginButton: {
    width: 278,
    height: 52,
    position: "absolute",
    backgroundColor: "#E9D2F4",
    borderRadius: 30,
    marginTop: 252,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    color: "#041425",
    fontSize: 14,
  },
  signupText: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "500",
  },
});
