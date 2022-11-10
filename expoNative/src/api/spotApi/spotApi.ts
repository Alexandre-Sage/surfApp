import { useState } from "react";
import { SpotListInterface } from "../../interfaces/spotInterfaces";
import { getFetch } from "../fetchApi/fetchApi"
export const useSpotList = (): [SpotListInterface[], () => void] => {
  try {
    const [spots, setSpots] = useState<SpotListInterface[]>([] as SpotListInterface[])
    const updateSpotList = async () => await getFetch(`${process.env.DEVELOPMENT_SERVER}/spot/getAllSpots`, setSpots).catch(err => console.log(err))
    return [spots, updateSpotList];
  } catch (error) {
    console.log(error)
    return error as any
  };
};//${process.env.DEVELOPMENT_SPOT_SERVER}