import React from "react";
import styles from "../../styles/LandingPage/LandingPage.style";
import { Image, Text, TouchableOpacity } from "react-native";
import Svg, { SvgUri } from "react-native-svg";
import { SurfAppLogoSvg } from "@sage/surf-app-ui-lib"
declare interface HeaderPropsInterface {
  displayLoginForm: Function,
};
export default function Header(props: HeaderPropsInterface): JSX.Element {
  const { displayLoginForm } = props;
  return (
    <TouchableOpacity style={styles.returnButton} onPress={() => displayLoginForm()}>
      <SurfAppLogoSvg width={400} height={200} style={styles.image} />
      <Text style={styles.title}>Surf App</Text>
    </TouchableOpacity>
  );
}