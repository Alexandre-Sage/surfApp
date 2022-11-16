import { StyleSheet } from "react-native";
import { backgroundColor, fontColor } from "../variable.style"

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  span: {
    width: 50,
    marginRight: 15,
    marginLeft: 15,
    height: 0.5,
    backgroundColor: fontColor,
  },
  text: {
    color: fontColor,
    fontSize: 16,

  }
});

export default styles;