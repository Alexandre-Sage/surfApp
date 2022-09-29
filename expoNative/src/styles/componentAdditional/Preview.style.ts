import { StyleSheet } from "react-native";
import { backgroundColor, borderColor, fontColor } from "../variable.style";

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: fontColor
    },
    container: {
        backgroundColor: backgroundColor,
        width: "100%",
        height: "100%",
    },
    scrollContainer: {
        width: "100%",
        height: 540,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    picture: {
        width: 350,
        height: 500,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        border: borderColor,
        borderWidth: 1,
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    button: {
        width: 190,
    }
});
export default styles;