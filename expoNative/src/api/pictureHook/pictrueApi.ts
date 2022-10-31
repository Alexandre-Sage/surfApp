import { CameraCapturedPicture } from "expo-camera";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";


export const uploadFromLocalFiles = async (callBack?: Function) => {
  const newPicture = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.All,
    quality: 1
  });
  return newPicture
}
