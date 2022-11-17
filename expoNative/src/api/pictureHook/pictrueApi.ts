import { CameraCapturedPicture } from "expo-camera";
import { ImageInfo, launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { useState } from "react";
import { sendFileFetch } from "../fetchApi/fetchApi";


export const useNewPicture = (pictures?: CameraCapturedPicture[]):
  [CameraCapturedPicture[], (pictures: CameraCapturedPicture) => void, (picture: CameraCapturedPicture["uri"]) => void] => {
  const [newPictures, setNewPictures] = useState<CameraCapturedPicture[]>([...pictures!] || []);
  const updateNewPicture = (picture: CameraCapturedPicture) => setNewPictures([...newPictures, picture]);
  const removeNewPicture = (pictureUri: CameraCapturedPicture["uri"]) =>
    setNewPictures(newPictures.filter(picture => picture.uri !== picture.uri));
  return [newPictures, updateNewPicture, removeNewPicture];
};


export const uploadPictureToServer = async (url: string, pictureUri: string, pictureName: string, callBack?: Function): Promise<Response> => {
  const formData: FormData = new FormData();
  const splitedImageUri: Array<string> = pictureUri.split(".");
  const imageType: string = splitedImageUri[splitedImageUri.length - 1];
  formData.append("image", {
    uri: pictureUri,
    type: `image/${imageType}`,
    name: pictureName
  });
  try {
    const response = await sendFileFetch(url, formData, callBack);
    return response;
  } catch (error) {
    throw error;
  };
};


export const uploadFromLocalFiles = async (callBack?: Function) => {
  const newPicture = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.All,
    quality: 1
  });
  return newPicture
}
