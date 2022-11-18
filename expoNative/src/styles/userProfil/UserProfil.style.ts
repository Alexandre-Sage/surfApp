import { StyleSheet } from 'react-native';
import { backgroundColor, columnFullCenter, fontColor } from "../variable.style"

const styles = StyleSheet.create({
  userProfilContainer: {
    backgroundColor: backgroundColor,
    ...columnFullCenter
    //justifyContent: "center",
    //alignItems: "center"
  }
});
export default styles;