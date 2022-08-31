import React, { useState } from "react";
import { View, LayoutAnimation } from "react-native";
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import styles from "../../styles/LandingPage/LandingPage.style";
import LoginForm from "./LoginFrom";
import Buttons from "./Buttons";
import SignUpForm from "./SignUpForm";
import Header from "./Header";
import { RootStackParamList } from "../../../App"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
                {loginForm ? <LoginForm navigation={navigation} /> : null}
                {buttons ? <Buttons displayLoginForm={() => displayLoginForm()} displaySignUpForm={() => displaySignUpForm()} /> : null}
            </View>
        </View>
    )
}

