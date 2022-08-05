import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, LayoutAnimation } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/LandingPage/LandingPage.style";
import surfAppLogo from "../../../assets/images/logo/logoSurfApp.png";
import LoginForm from "./LoginFrom";
import Buttons from "./Buttons";
export default function LandingPage() {
    const navigation = useNavigation();
    const [loginForm, setLoginForm] = useState(false);
    const [buttons, setButtons] = useState(true);
    const displayLoginForm = () => {
        animationEaseInOut
        loginForm ? (
            setButtons(true), setLoginForm(false)
        ) : (
            setLoginForm(true), setButtons(false)
        );
    };
    const animationEaseInOut = LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.returnButton} onPress={() => displayLoginForm()}>
                <Image style={styles.image} source={surfAppLogo} />
                <Text style={styles.title}>Surf App</Text>
            </TouchableOpacity>
            <View style={styles.subContainer}>
                {loginForm ? <LoginForm /> : null}
                {buttons ? <Buttons displayLoginForm={() => displayLoginForm()} /> : null}
            </View>
        </View>
    )
}

