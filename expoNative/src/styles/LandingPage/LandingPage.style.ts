import { StyleSheet } from 'react-native';
import { backgroundColor, fontColor } from "../variable.style"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
    },
    returnButton: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
        marginTop: 15
    },
    subContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1

    },
    title: {
        color: fontColor,
        fontSize: 32,
    },
    image: {
        width: 400,
        height: 150,
        marginBottom: 25
    },
});

export default styles;