import { StyleSheet } from "react-native";
import { fontColor, borderColor, columnFullCenter } from "../variable.style";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: borderColor,
    ...columnFullCenter
    //justifyContent: "center",
    //alignItems: "center"
  },
  text: {
    color: fontColor,
    textAlign: "center",
    fontSize: 16
  }
})