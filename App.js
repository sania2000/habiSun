import Login from "./screens/loginScreen";
import Main from "./screens/main";
import Signup from "./screens/signupScreen";
import { Modal, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <Login />
    </>
  );
}
