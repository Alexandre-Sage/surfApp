import { useState } from "react";
import { getFetch } from "../../api/fetchApi/fetchApi";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import { CurrentLocationInterface } from "../../interfaces/currentLocation";
import { Use } from "react-native-svg";

declare interface UserHeaderInterface {
  userName: string,
  name: string,
  location: string,
  firstName: string,
  creationDate: string
}

declare interface PictureInterface {
  path: string,
  place: string,
}


export const useProfilHeaderInfo = (): [UserHeaderInterface[], () => void] => {
  const [headerInfo, setHeaderInfo] = useState<UserHeaderInterface[]>([] as UserHeaderInterface[])
  const updateHeaderInfo = () => getFetch(`${process.env.DEVELOPMENT_SERVER}/user/header`, setHeaderInfo)
    .catch(error => setHeaderInfo(error));
  return [headerInfo, updateHeaderInfo];
}

export const useProfilPicture = (): [PictureInterface[], () => void] => {
  const [pictureInfo, setPictureInfo] = useState<PictureInterface[]>([]);
  const updatePictureInfo = () => getFetch(`${process.env.DEVELOPMENT_SERVER}/user/allPicture`, setPictureInfo)
    .catch(error => setPictureInfo(error));
  return [pictureInfo, updatePictureInfo]
}

export const useUserLocation = (): [CurrentLocationInterface, () => void] => {
  const [currentLocation, setCurrentLocation] = useState<CurrentLocationInterface>({} as CurrentLocationInterface)
  requestForegroundPermissionsAsync()
    .then(authorization => authorization)
    .catch(error => error)
  const updateCurrentLocation = () => getCurrentPositionAsync({})
    .then(location => setCurrentLocation({ ...location.coords }))
    .catch(error => setCurrentLocation(error))
  return [currentLocation, updateCurrentLocation];
};

