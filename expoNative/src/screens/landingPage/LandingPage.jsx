import React, { useState } from "react";
import { View, LayoutAnimation } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/LandingPage/LandingPage.style";
import LoginForm from "./LoginFrom";
import Buttons from "./Buttons";
import SignUpForm from "./SignUpForm";
import Header from "./Header";
export default function LandingPage() {
    const navigation = useNavigation();
    const [loginForm, setLoginForm] = useState(false);
    const [signUpForm, setSignUpForm] = useState(false);
    const [buttons, setButtons] = useState(true);
    const displayLoginForm = () => {
        animationEaseInOut
        loginForm ? (setButtons(true), setLoginForm(false)) : (setLoginForm(true), setButtons(false));
    };
    const displaySignUpForm = () => (
        animationEaseInOut,
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

