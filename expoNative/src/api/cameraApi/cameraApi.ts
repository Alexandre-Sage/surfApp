import { Camera, CameraCapturedPicture } from "expo-camera";
import { useMemo, useState } from "react";

//let camera: Camera;

export const useNewPicture = (pictures?: CameraCapturedPicture[]):
  [CameraCapturedPicture[], (pictures: CameraCapturedPicture) => void] => {
  const [newPictures, setNewPictures] = useState<CameraCapturedPicture[]>(pictures || []);
  const updateNewPicture = (picture: CameraCapturedPicture) => setNewPictures([...newPictures, picture]);
  return [newPictures, updateNewPicture]
}
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


