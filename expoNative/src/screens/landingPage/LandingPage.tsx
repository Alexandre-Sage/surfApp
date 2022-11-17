import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { LayoutAnimation, View } from "react-native";
import { RootStackParamList } from "../../../App";
import styles from "../../styles/LandingPage/LandingPage.style";
import Buttons from "./Buttons";
import Header from "./Header";
import { LoginForm } from "./LoginFrom";
import SignUpForm from "./SignUpForm";
export type LandingPageProps = NativeStackScreenProps<RootStackParamList, "LandingPage">

export default function LandingPage({ route, navigation }: LandingPageProps): JSX.Element {
  const [loginForm, setLoginForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);
  const [buttons, setButtons] = useState(true);
  const displayLoginForm = () => {
    animationEaseInOut
    loginForm ? (setButtons(true), setLoginForm(false)) : (setLoginForm(true), setButtons(false));
  };
  const displaySignUpForm = () => (
    signUpForm ? (setSignUpForm(false), setButtons(true)) : (setSignUpForm(true), setButtons(false))
  );


  const animationEaseInOut = LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  return (
    <View style={styles.container}>
      {signUpForm ? <SignUpForm /> : <Header displayLoginForm={() => displayLoginForm()} />}
      <View style={styles.subContainer}>
        {loginForm ? <LoginForm /> : null}
        {buttons ? <Buttons displayLoginForm={() => displayLoginForm()} displaySignUpForm={() => displaySignUpForm()} /> : null}
      </View>
    </View>
  )
}

