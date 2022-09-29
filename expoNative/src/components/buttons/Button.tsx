import React from "react"
import { Text, TouchableOpacity, View, } from 'react-native';
import ButtonsShadow from "./ButtonsShadow";
import styles from "../../styles/buttons/Buttons.style";

declare interface ButtonPropsInterface {
    text: string,
    onPressFunction: Function,
    aditionalStyles?: object,//StyleProp<TouchableOpacityProps>,
    containerStyle?: object//StyleProp<ViewProps>
}
export default function Button(props: ButtonPropsInterface): JSX.Element {
    const { text, onPressFunction, aditionalStyles, containerStyle } = props;
    return (
        <View style={containerStyle}>
            <TouchableOpacity
                style={[styles.button, aditionalStyles]}
                onPress={(event) => onPressFunction(event)}
            >
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
            <ButtonsShadow aditionalStyles={aditionalStyles} />
        </View>
    );
};

