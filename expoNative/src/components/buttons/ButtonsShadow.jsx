import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../styles/buttons/ButtonsShadow.style";

export default function ButtonsShadow() {
    const colorsArray = ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0.3)", 'transparent'];
    const start = [0.5, 0.6];
    const end = [1, 1];
    return (
        <View style={styles.view}>
            <LinearGradient colors={colorsArray} style={styles.shadow} start={start} end={end} />
        </View >
    );
};

