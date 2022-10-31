import React from "react";
import styles from "../../styles/LandingPage/LandingPage.style";
import { Image, Text, TouchableOpacity } from "react-native";
import Svg, { SvgUri } from "react-native-svg";

declare interface HeaderPropsInterface {
  displayLoginForm: Function,
};
export default function Header(props: HeaderPropsInterface): JSX.Element {
  const { displayLoginForm } = props;
  console.log(process.env.DEVELOPMENT_SERVER)
  const logoPath = `${process.env.DEVELOPMENT_IMAGE_SERVER}/images/assets/logo.svg`
  return (
    <TouchableOpacity style={styles.returnButton} onPress={() => displayLoginForm()}>
      <SvgUri width={400} height={200} style={styles.image} uri={logoPath} />
      <Text style={styles.title}>Surf App</Text>
    </TouchableOpacity>
  );
}