import { StyleSheet } from "react-native";
import { borderColor, columnFullCenter, columnJustifySpaceAround, fontColor, paragraph, paragrapheSize, rowFullCenter } from "../variable.style";

export const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "rgba(30, 30, 30, 1)",
    height: "100%",
  },
  scrollView: {
  },
  container: {
    height: "auto",
  },
  spotInfoCtn: {
    height: 175,
    ...columnFullCenter
  },
  spotTypeCtn: {
    height: 125,
    justifyContent: "space-around"
  },
  spotTypeTxtCtn: {
    height: 40,
    justifyContent: "center",
  },
  addSpotTxt: {
    ...paragraph,
    marginLeft: 5
  },
  spotTypeInputCtn: {
    overflow: "visible",
    flexDirection: "row",
  },
  spotOrientationContainer: {
    ...columnFullCenter,
    width: "100%",
    marginTop: 25,
  },
  addSpotTitle: {
    alignSelf: "flex-start",
    width: "100%",
    height: 35,
    borderBottomColor: borderColor,
    borderBottomWidth: 1
  },
  spotOrientation: {
    ...rowFullCenter,
    width: 300,
  },

  locationCtn: {
    marginTop: 25,
    height: 225,
    ...columnFullCenter,
  },
  locationTitleCtn: {

    height: "100%",
    width: "100%"
  },
  locationInputCtn: {
    ...columnFullCenter,
    marginBottom: 25,
  },

  spotPictureCtn: {
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 120,

  },
  spotTitleCtn: {},
  pictureButtonCtn: {
    ...columnJustifySpaceAround,
    height: 90
  },

  createCtn: {
    ...columnJustifySpaceAround,
    height: 90
  },

})