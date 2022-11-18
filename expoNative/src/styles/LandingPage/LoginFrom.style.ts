import { StyleSheet } from "react-native";
import { columnJustifySpaceBetween } from "../variable.style";

const styles = StyleSheet.create({
  formContainer: {
    width: 400,
    height: 225,
    ...columnJustifySpaceBetween
  }
});
export default styles;