import React from "react"
import { Text, TouchableOpacity, View } from 'react-native';
import ButtonsShadow from "./ButtonsShadow";
import styles from "../../styles/buttons/Buttons.style";

export default function Button(props) {
    const { text, onPressFunction } = props;
    return (
        <React.Fragment>
            <TouchableOpacity style={styles.button} onPress={(event) => onPressFunction(event)} >
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
            <ButtonsShadow />
        </React.Fragment>
    );
};

