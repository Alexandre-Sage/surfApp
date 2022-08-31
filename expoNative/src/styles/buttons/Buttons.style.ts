import { StyleSheet } from 'react-native';
import { borderColor, fontColor, borderRadius, paragrapheSize } from "../variable.style";

const styles = StyleSheet.create({
    textButton: {
        color: fontColor,
        fontSize: paragrapheSize,
    },
    button: {
        width: 250,
        height: 50,
        borderWidth: 0.2,
        borderColor: borderColor,
        borderRadius: borderRadius,
        color: fontColor,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgba(255, 255, 255, 1)",
        shadowOpacity: 5,
        opacity: 1,
        overflow: "visible",
    },
});

export default styles;