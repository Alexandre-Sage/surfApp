import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../../../App';
import { useAppSelector } from '../../../redux/hook';
import { backgroundColor } from '../../../styles/variable.style';

export type GalleryProps = NativeStackScreenProps<RootStackParamList, "Gallery">
export default function Gallery({ navigation }: GalleryProps) {
    const { pictures } = useAppSelector((state) => state.picture);

    const picturesJsx: JSX.Element[] = pictures.map((picture, key) => (
        <ImageBackground key={key} style={styles.image} source={{ uri: `${process.env.API_LAN}/${picture.path}` }}>
            <TouchableOpacity style={styles.image} onPress={() => navigation.navigate("FullScreen", {
                imagePath: `${process.env.API_LAN}/${picture.path}`
            })}>
            </TouchableOpacity>
        </ImageBackground>
    ));
    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    {picturesJsx}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

        width: "100%",
        height: "100%",
        backgroundColor: "black",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
    },

    image: {
        width: 100,
        height: 100,
    },
});