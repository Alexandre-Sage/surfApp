import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../../styles/input/Input.style";
/**
 * Input functional component take two props a name and a function to execute on change and a 
 * aditional keyboardType props
 * @param {name,onValueChange} props 
 */



export default function Input(props) {
    const { name, onValueChange, state, setState } = props;
    const keyboardType = props.keyboardType ? props.keyboardType : "default";
    function answersRecord(data, setState, state) {
        const { name, value } = data;
        setState({
            ...state, [name.toLowerCase()]: value
        });
    };
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{name}: </Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => answersRecord({ name: name, value: value }, setState, state)}
                keyboardType={keyboardType}
            />
        </View>
    )
}

