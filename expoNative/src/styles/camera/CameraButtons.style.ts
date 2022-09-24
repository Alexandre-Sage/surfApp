import { StyleSheet } from "react-native";
import { backgroundColor, fontColor } from "../variable.style"

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: "35%",
        borderWidth: 1,
        borderColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        overflow: "visible",
        marginBottom: "5%",
    },
    takePicturebutton: {
        width: "25%",
        height: "35%",
        borderWidth: 5,
        borderColor: "white",
        borderRadius: 100
    },
    flashButton: {
        width: "25%",
        height: 65,
        opacity: 1,
    },
    flashSvg: {
        width: "100%",
        height: "100%",
    },
    ratioListContainer: {
        borderWidth: 1,
        borderColor: "white",
        width: "25%",
        height: 170,
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom: 25

    },
    ratioList: {
        width: "100%",
        height: 150,
        borderWidth: 1,
        borderColor: "red",
        marginBottom: 5
    },
    ratiosListButton: {
        borderWidth: 1,
        borderColor: "blue",
    }
})
export default styles;