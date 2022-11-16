import { StyleSheet } from "react-native";
import { backgroundColor, borderColor, borderRadius, devBorder, fontColor, paragrapheSize, columnFullCenter, rowFullCenter, border, paragraph } from "../variable.style"


export const styles = StyleSheet.create({
  safeView: {
    width: "50%",
    height: 35,
    ...columnFullCenter
  },
  mainView: {
    width: "100%",
    ...rowFullCenter
  },
  buttonView: {
    width: "85%",
    height: 35,
    justifyContent: 'center',
    alignItems: "center",
    ...border
  },
  button: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    width: "75%"
  },
  buttonText: {
    ...paragraph
  },
  scrollView: {
    width: "85%",
    position: "absolute",
    zIndex: 5,
    backgroundColor: "rgba(30, 30, 30, 1)",
    top: 35,
    backfaceVisibility: "visible",
    ...border
  },
  listCtn: {
    zIndex: 999,
  },
  listItem: {
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "rgba(30, 30, 30, 1)"

  },
  listItemText: {
    ...paragraph,
    marginLeft: 10
  }
});