import React from "react";
import { Platform, StyleSheet, Text, UIManager, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";
import styles from "../../styles/componentAdditional/Header.style";

interface HeaderProps {
  title: string,
}

export const Header = ({ title }: HeaderProps): JSX.Element => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.logoContainer}>
      <SvgUri width={75} height={75} uri={`${process.env.DEVELOPMENT_IMAGE_SERVER}/images/assets/logo.svg`} />
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <SvgUri width={30} height={40} uri={`${process.env.DEVELOPMENT_IMAGE_SERVER}/images/assets/profil.svg`} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <SvgUri width={30} height={30} uri={`${process.env.DEVELOPMENT_IMAGE_SERVER}/images/assets/settings.svg`} />
      </TouchableOpacity>
    </View>
  </View>
)
