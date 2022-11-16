import { StyleProp, StyleSheet } from "react-native";

const backgroundColor = "rgba(30, 30, 30, 1)";
const fontColor = "rgba(235, 235, 235, 1)";
const inputColor = "rgba(255, 255, 255, 1)";
//const borderColor = "rgba(255, 255, 255, 0.3)";
const blueColor = "rgba(75,159,196,1)";
const borderColor = "rgba(75,159,196,0.3)";
const borderRadius = 3;
const paragrapheSize = 16;
const titleSize = 24;

const devBorder = {
  borderColor: "red",
  borderWidth: "2"
} as StyleProp<any>
const mixin = StyleSheet.create({
  columnFullCenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  rowFullCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  rowAlign: {

  },
  columnAlign: {

  },
  rowJustify: {

  },
  columnJustify: {

  },
  columnJustifySpaceAround: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  border: {
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: 1
  },
  paragraph: {
    color: fontColor,
    fontSize: paragrapheSize
  }
})
export const columnFullCenter = mixin.columnFullCenter;
export const rowFullCenter = mixin.rowFullCenter;
export const border = mixin.border;
export const paragraph = mixin.paragraph;
export const columnJustifySpaceAround = mixin.columnJustifySpaceAround;
export {
  backgroundColor,
  fontColor,
  borderColor,
  borderRadius,
  paragrapheSize,
  titleSize,
  devBorder,
}