import { StyleSheet } from "react-native";
import { backgroundColor, fontColor, paragrapheSize, titleSize, borderColor } from "../variable.style"

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    userNameContainer: {
        borderBottomWidth: 1,
        borderColor: borderColor,
        height: 75,
        display: "flex",
        justifyContent: "center",
    },
    userName: {
        color: fontColor,
        fontSize: titleSize,
        textAlign: "center"
    },
    infoContainer: {
        borderBottomWidth: 1,
        borderColor: borderColor,
        display: "flex",
        flexDirection: "row",
        height: 100,
    },
    infoSubContainer: {
        borderColor: borderColor,
        width: "50%",
        height: 100,
        display: "flex",
        justifyContent: "space-around",
        //alignItems: "center",
    },
    info: {
        color: fontColor,
        fontSize: paragrapheSize,
        marginLeft: 25
    },
});
export default styles;