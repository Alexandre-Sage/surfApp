import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../../styles/input/Input.style";
import toCamelCase from "../../modules/strings/toCamelCase";
/**
 * Input functional component take two props a name and a function to execute on change and a 
 * aditional keyboardType props
 * @param {name,onValueChange} props 
 */

declare interface InputProps {
  name: string,
  onValueChange?: Function,
  state: object,
  setState: Function,
  defaultValue?: string
  keyboardType?: any
}
/**
 * @deprecated TxtInput use TxtInput from TxtInput.tsx 
 * */
export const TxtInput = (props: InputProps): JSX.Element => {
  const { name, onValueChange, state, setState, defaultValue } = props;
  const keyboardType = props.keyboardType ? props.keyboardType : "default";

  function answersRecord(data: any, setState: Function, state: object): void {
    const { name, value } = data;
    setState({
      ...state, [toCamelCase(name)]: value
    });
    //console.log(state)
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{name}: </Text>
      <TextInput defaultValue={defaultValue}
        style={styles.input}
        onChangeText={(value) => answersRecord({ name: name, value: value }, setState, state)}
        keyboardType={keyboardType}
      />
    </View>
  )
}

