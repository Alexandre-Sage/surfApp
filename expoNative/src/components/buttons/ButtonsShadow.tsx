import React from "react";
import { StyleProp, StyleSheetProperties, View, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../styles/buttons/ButtonsShadow.style";
declare interface ButtonShadowPropsInterface {
    aditionalStyles: StyleProp<ViewProps>,
}
export default function ButtonsShadow(props: ButtonShadowPropsInterface): JSX.Element {
    const { aditionalStyles } = props;
    const colorsArray = ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0.3)", 'transparent'];
    const start = [0.5, 0.6];
    const end = [1, 1];
    return (
        <View style={[styles.view, aditionalStyles]}>
            <LinearGradient colors={colorsArray} style={[styles.shadow, aditionalStyles]} start={start} end={end} />
        </View >
    );
};

