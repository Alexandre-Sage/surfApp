import { StyleSheet } from "react-native";
import { borderColor, fontColor, borderRadius, paragrapheSize } from "../variable.style"

const inputBackgroundColor = "rgba(100, 100, 100, 0.47)";
const inputBorderColor = "rgba(0, 0, 0, 1)";

const styles = StyleSheet.create({
    inputContainer: {
        //borderColor: "white",
        //borderWidth: 1,
        flex: 2,
        justifyContent: "center",
        width: 300,
        height: 50
    },
    label: {
        color: fontColor,
        marginBottom: 5,
        fontSize: paragrapheSize
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: inputBackgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: borderRadius
    }
});
export default styles;