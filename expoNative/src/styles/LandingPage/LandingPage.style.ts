import { StyleSheet } from 'react-native';
import { backgroundColor, columnFullCenter, fontColor } from "../variable.style"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    ...columnFullCenter
    //alignItems: "center",
    //justifyContent: "center",
  },
  returnButton: {
    //alignItems: "center",
    //justifyContent: "center",
    marginBottom: 15,
    marginTop: 15,
    ...columnFullCenter
  },
  subContainer: {
    //alignItems: "center",
    //justifyContent: "center",
    flex: 1,
    ...columnFullCenter

  },
  title: {
    color: fontColor,
    fontSize: 32,
  },
  image: {
    width: "25%",
    height: "25%",
    marginBottom: 25
  },
});

export default styles;