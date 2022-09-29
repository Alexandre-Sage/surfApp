import { StyleSheet } from "react-native";
import { backgroundColor, borderColor, borderRadius, fontColor } from "../variable.style";
const styles = StyleSheet.create({
    imageBackground: {
        width: "100%",
        height: "100%",
        opacity: 0.9,
        resizeMode: "stretch",
        borderRadius: borderRadius,
        shadowRadius: 5,
        overflow: "hidden",
        justifyContent: "flex-end",
        borderColor: borderColor,
        borderWidth: 1
    },
    previewButtonContainer: {
        borderTopWidth: 1,
        borderColor: borderColor,
        width: "100%",
        flexDirection: "row",
        height: 50,
    },
    previewButton: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
    },
    spliter: {
        borderLeftWidth: 1,
        borderColor: borderColor,
        borderRadius: borderRadius,
    },
    previewButtonText: {
        color: fontColor
    }
});

export default styles;