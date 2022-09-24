import { WhiteBalance } from "expo-camera";
import { StyleSheet } from "react-native";
import { backgroundColor, borderColor, borderRadius, fontColor } from "../variable.style"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
        height: 425,
        justifyContent: "space-around"
    },
    scrollContainer: {
        //borderBottomWidth: 1,
        // borderColor: "white",
        width: "100%",
        height: 225,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    scroll: {
        flexWrap: "wrap",
        borderWidth: 0,

    },
    picture: {
        width: 150,
        height: 200,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 5
    },
    subContainer: {
        borderTopWidth: 1,
        borderColor: borderColor,
        height: 150,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    /////////////////////////////////////////////////////////////////////////////
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
    },
    button: {
        width: 200,
    },
    addPictureButtonContainer: {
        marginBottom: 0,
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: borderRadius,
        width: 125,
        height: 50,
        flexDirection: "row",

        //position: "relative"
        justifyContent: "center",
        alignItems: "center"
    },
    addPictureButton: {
        //borderLeftWidth: 1,
        //borderColor: borderColor,
        width: 62.5,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    split: {
        borderLeftWidth: 1,
        borderColor: borderColor
    },
    buttonText: {
        color: fontColor,
    },
    svg: {
        //width: "25%",
        //height: "25%",
        //marginRight: 85,
    },
    patch: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 50,
        marginBottom: 5,
    }

});
export default styles;