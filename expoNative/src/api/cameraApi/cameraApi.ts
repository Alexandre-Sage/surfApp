import { Camera, CameraCapturedPicture } from "expo-camera";
import { ImageInfo } from "expo-image-picker";
import { useMemo, useState } from "react";

export const takePicture = async (camera: Camera, callBack: Function): Promise<void> => {
  //const [newPictures, updateNewPicture] = useNewPicture();
  try {
    const picture = await camera.takePictureAsync(/*{ onPictureSaved: async (p) => console.log(p) }*/)
    callBack(picture)
  } catch (error: any) {
    console.error("takePicture", error)
    throw error
  }
};

export const useFlash = () => {
  const [flash, setFlash] = useState(0);

}

export const useGetRatios = async (camera: Camera): Promise<[string[], (ratio: string[]) => void]> => {
  const [ratios, setRatios] = useState<string[]>([]);
  setRatios(await camera.getSupportedRatiosAsync())
  return [ratios, setRatios]
};


