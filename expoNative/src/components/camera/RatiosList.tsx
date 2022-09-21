import { Camera } from "expo-camera";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getRatios, setRatio } from "../../redux/slices/camera/cameraSlice";
interface RatiosListProps {
    camera: Camera
}

export const RatiosList = ({ camera }: RatiosListProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const { imageRatiosList } = useAppSelector((state) => state.camera);
    useEffect(() => {
        dispatch(getRatios(camera))
    }, [])
    const ratioListJsx = imageRatiosList.map((ratio, key): JSX.Element => (
        <TouchableOpacity key={key} onPress={() => dispatch(setRatio(ratio))} >
            <Text>{ratio}</Text>
        </TouchableOpacity>
    ));
    return (
        <View>
            {ratioListJsx}
        </View>
    );
};