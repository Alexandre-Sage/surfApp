import React from "react";
import styles from "../../styles/LandingPage/LandingPage.style";
import { Image, Text, TouchableOpacity } from "react-native";

declare interface HeaderPropsInterface {
    displayLoginForm: Function,
};
export default function Header(props: HeaderPropsInterface): JSX.Element {
    const { displayLoginForm } = props;
    const logoPath = `${process.env.API_LAN}/src/images/logo/surfAppLogo.png`
    return (
        <TouchableOpacity style={styles.returnButton} onPress={() => displayLoginForm()}>
            <Image style={styles.image} source={{ uri: logoPath }} />
            <Text style={styles.title}>Surf App</Text>
        </TouchableOpacity>
    );
}