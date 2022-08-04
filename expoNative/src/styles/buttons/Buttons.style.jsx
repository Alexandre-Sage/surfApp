import { StyleSheet } from 'react-native';
import { fontColor } from "../variable.style";

const styles = StyleSheet.create({
    textButton: {
        color: fontColor,
        fontSize: 16,
    },
    button: {
        width: 250,
        height: 50,
        borderWidth: 0.2,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 1.5,
        color: fontColor,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(255, 255, 255, 1)",
        shadowOpacity: 5,
        opacity: 1,
        overflow: "visible",
    },
});

export default styles;