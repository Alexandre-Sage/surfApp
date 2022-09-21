import { StyleSheet } from "react-native";
import { backgroundColor, fontColor } from "../variable.style"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        borderWidth: 1,
        //borderColor: "white"
    },
    takePicturebutton: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 100
    },
    flashButton: {
        width: 100,
        height: 100,
        opacity: 1,
        borderWidth: 1,
        borderColor: "white",
        color: "black"
    },
    ratiosListButton: {}
})
export default styles;