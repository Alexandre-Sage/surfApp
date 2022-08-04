import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../../styles/LandingPage/LandingPage.style"
import surfAppLogo from "../../../assets/images/logo/logoSurfApp.png";
import Button from "../../components/buttons/Button";
import Or from "./Or"
export default function LandingPage() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={surfAppLogo} />
            <Text style={styles.title}>Surf App</Text>
            <Button text="Log In" />
            <Or />
            <Button text="Sign Up" />
        </View>
    )
}

