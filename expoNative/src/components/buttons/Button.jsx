import React from "react"
import { Text, TouchableOpacity, View } from 'react-native';
import ButtonsShadow from "./ButtonsShadow";
import styles from "../../styles/buttons/Buttons.style";

export default function Button(props) {
    return (
        <React.Fragment>
            <TouchableOpacity style={styles.button} ><Text style={styles.textButton}>{props.text}</Text></TouchableOpacity>
            <ButtonsShadow />
        </React.Fragment>
    );
};

