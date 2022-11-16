import React, { ReactNode, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { borderColor, borderRadius, fontColor } from "../../styles/variable.style";

interface CheckBoxProps {
  value: any;
  action: (value: string) => void;
}

export const CheckBox = ({ action, value }: CheckBoxProps): JSX.Element => {
  const [check, setCheck] = useState<boolean>(false)
  const onChange = () => {
    setCheck(!check);
    action(value);
    console.log(check)
  }
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.view}>
        <Text style={styles.text}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={() => onChange()}>
          {check ? <SvgUri color={"white"} width={25} height={25} uri={`${process.env.DEVELOPMENT_IMAGE_SERVER}/images/assets/check.svg`} /> : null}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    //borderColor: "red",
    //borderWidth: 1,
    width: 75,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    width: "85%",
    height: "85%",
    //borderColor: "green",
    //borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    color: fontColor,
    fontSize: 18
  },
  button: {
    borderWidth: 2,
    borderRadius: borderRadius,
    borderColor: borderColor,
    width: 25,
    height: 25
  },
  check: {
    width: 100,
    height: 100,
    backgroundColor: "white"
  }
})