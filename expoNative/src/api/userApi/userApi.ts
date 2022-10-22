import { useState } from "react";
import { getFetchFunction } from "../../modules/fetch/basicFetch";
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


export const useProfilHeaderInfo = (authToken: string): [UserHeaderInterface | Error, (userInfo: UserHeaderInterface) => void] => {
  const [headerInfo, setHeaderInfo] = useState<UserHeaderInterface>({} as UserHeaderInterface)
  getFetchFunction(`${process.env.DEVELOPMENT_USER_SERVER}/header`, authToken)
    .then(response => setHeaderInfo(response))
    .catch(error => setHeaderInfo(error));
  return [headerInfo, setHeaderInfo];
}

export const useProfilPicture = (authToken: string): [PictureInterface[], (pictures: PictureInterface[]) => void] => {
  const [pictureInfo, setPictureInfo] = useState<PictureInterface[]>([]);
  getFetchFunction(`${process.env.DEVELOPMENT_USER_SERVER}/picture`, authToken)
    .then(response => setPictureInfo(response))
    .catch(error => setPictureInfo(error));
  return [pictureInfo, setPictureInfo]
}

export const getUserLocation = (): [CurrentLocationInterface, (newLocation: CurrentLocationInterface) => void] => {
  const [currentLocation, setCurrentLocation] = useState<CurrentLocationInterface>({} as CurrentLocationInterface)
  requestForegroundPermissionsAsync()
    .then(authorization => authorization)
    .catch(error => error)
  getCurrentPositionAsync({})
    .then(location => setCurrentLocation({ ...location.coords }))
    .catch(error => setCurrentLocation(error))
  return [currentLocation, setCurrentLocation];
};

