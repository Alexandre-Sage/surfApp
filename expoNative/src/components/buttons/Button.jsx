import React from "react"
import { Text, TouchableOpacity, View } from 'react-native';
import ButtonsShadow from "./ButtonsShadow";
import styles from "../../styles/buttons/Buttons.style";

export default function Button(props) {
    const { text, onPressFunction, aditionalStyles } = props;
    console.log(aditionalStyles)
    return (
        <View style={aditionalStyles ? aditionalStyles : null}>
            <TouchableOpacity style={styles.button} onPress={(event) => onPressFunction(event)} >
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
            <ButtonsShadow />
        </View>
    );
};

