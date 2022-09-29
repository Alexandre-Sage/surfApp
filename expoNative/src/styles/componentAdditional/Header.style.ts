import { StyleSheet } from "react-native";
import { backgroundColor, fontColor } from "../variable.style";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        //height: 100,
        //backgroundColor: backgroundColor,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    titleContainer: {
        width: 100
    },
    title: {
        color: fontColor,
        fontSize: 24,
        marginTop: 10
    },
    logoContainer: {
        width: 100,
        justifyContent: "center"
    },
    buttonContainer: {
        width: 100,
        alignItems: "flex-end",
        justifyContent: "space-around",
    },
    button: {

    },
});
export default styles;