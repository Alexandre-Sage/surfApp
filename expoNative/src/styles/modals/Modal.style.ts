import { StyleSheet } from "react-native";
import { backgroundColor, borderColor, devBorder } from "../variable.style";
export const styles = StyleSheet.create({
  container: {
    //...devBorder,
    position: "absolute",
    backgroundColor: backgroundColor,
    zIndex: 5,
    width: 500,
    height: 650,
    borderColor: borderColor,
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bottom: 50,
    overflow: "hidden",
  },
  view: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  touchable: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 375
  }
})