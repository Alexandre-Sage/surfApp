import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/LandingPage/Or.style"

export default function Or() {
    return (
        <View style={styles.container}>
            <View style={styles.span}></View>
            <Text style={styles.text}>Or</Text>
            <View style={styles.span}></View>
        </View>
    )
}