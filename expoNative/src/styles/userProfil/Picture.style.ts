import { StyleSheet } from "react-native";
import { backgroundColor, fontColor } from "../variable.style"

const styles = StyleSheet.create({
    picture: {
        width: 100,
        height: 100,
        //borderBottomColor: "white",
        borderWidth: 5
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        //alignItems: "space-around",
    },
    button: {
        width: 125,
        //height: 40
        //backgroundColor: "white",
    }
});
export default styles;