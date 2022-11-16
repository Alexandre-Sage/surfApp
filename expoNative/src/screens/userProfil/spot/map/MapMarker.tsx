import React from "react";
import { Marker } from "react-native-maps";
declare interface MapMarkerProps {
  title?: string,
  coordinateObject: CoordinateObjectInterface
  color?: string
};

export interface CoordinateObjectInterface {
  longitude: number,
  latitude: number,
};

interface WavesForecastObjectInterface {
  time: Array<string>,
  wavesHeight: Array<number>,
  wavesPeriod: Array<number>,
  wavesDirection: Array<number>,
};

export const UserMapMarker = ({ coordinateObject, title, color }: MapMarkerProps): JSX.Element => {

  const hourlyWavesForecast = async (coordinateObject: CoordinateObjectInterface, timezone: string): Promise<WavesForecastObjectInterface> => {
    const { longitude, latitude } = coordinateObject;
    const url = `https://marine-api.open-meteo.com/v1/marine?timezone=${timezone}&latitude=${latitude}&longitude=${longitude}&hourly=wave_height,wave_period,wave_direction`
    const wavesData = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json())
    const keys = Object.keys(wavesData.hourly)
    const wavesForecastObject = {
      time: wavesData.hourly[keys[0]],
      wavesHeight: wavesData.hourly[keys[1]],
      wavesPeriod: wavesData.hourly[keys[2]],
      wavesDirection: wavesData.hourly[keys[3]],
    }
    console.log(wavesForecastObject)
    return wavesForecastObject
  };


  const onPressFunction = async (coordinateObject: CoordinateObjectInterface) => {
    const { longitude, latitude } = coordinateObject;
    const date = new Date(Date.now()).toISOString().split(".")[0]
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    hourlyWavesForecast(coordinateObject, timezone)


  };
  return (
    <React.Fragment>
      <Marker
        coordinate={coordinateObject}
        title={title}
        pinColor={color}
        onPress={(event) => onPressFunction(coordinateObject)}
      />
    </React.Fragment>
  )
}