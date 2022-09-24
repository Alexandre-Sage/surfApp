import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../App";

/*export interface FullScreenProps extends ScreenProps {
    imagePath: string;
}*/
export type FullScreenProps = NativeStackScreenProps<RootStackParamList, "FullScreen">
export default function FullScreen({ navigation, route }: FullScreenProps): JSX.Element {
    const { imagePath } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: imagePath }} style={styles.container} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    }
});