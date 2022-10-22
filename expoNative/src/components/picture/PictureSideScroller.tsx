import React, { ReactNode } from "react";
import { Image, ImageStyle, ScrollView, StyleSheet, StyleSheetProperties, View, ViewStyle } from "react-native";
import { TouchablePicture } from "./TouchablePicture"
interface PictureSideScrollerProps {
  pictures: Array<any>
  styles: {
    scrollContainer: ViewStyle,
    picture: ImageStyle
  },
  isPreview?: boolean
  pictureFunction?: Function,
}

export const PictureSideScroller = ({ pictures, styles, isPreview, pictureFunction }: PictureSideScrollerProps): JSX.Element => {
  const pictureJsx = pictures.map((picture, key): ReactNode => (
    <TouchablePicture key={key} imagePath={picture.path ? `${process.env.API_LAN}/${picture.path}` : picture.uri} style={styles.picture} isPreview={isPreview} previewFunction={pictureFunction ? pictureFunction : () => { }} />
  ));
  return (
    <View style={styles.scrollContainer}>
      <ScrollView nestedScrollEnabled={true} horizontal={true} >
        {pictureJsx}
      </ScrollView>
    </View>
  );
};

