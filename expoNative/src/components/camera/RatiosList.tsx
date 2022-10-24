import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../styles/camera/CameraButtons.style"

interface RatiosListProps {
  camera: Camera
  setRatio: (string: string) => void
}

export const RatiosList = ({ camera, setRatio }: RatiosListProps): JSX.Element => {
  const [ratios, setRatioList] = useState<string[]>()
  useEffect(() => {
    camera.getSupportedRatiosAsync().then(res => setRatioList(res))


  }, [])
  console.log(ratios)
  const ratioListJsx = ratios?.map((ratio, key): JSX.Element => (
    <TouchableOpacity key={key} onPress={() => setRatio(ratio)} >
      <Text>{ratio}</Text>
    </TouchableOpacity>
  ));
  return (
    <ScrollView style={styles.ratioList} >
      {ratioListJsx}
    </ScrollView>
  );
};