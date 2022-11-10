import React, { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import { styles } from "../../styles/modals/Modal.style"
export interface ModalProps {
  toggleModal: boolean;
  onClose: () => void;
  children: ReactNode
}
export const useModal = (): [boolean, () => void] => {
  const [toggleModal, setToggleModal] = useState<boolean>(false)
  const toggle = () => setToggleModal(!toggleModal)
  return [toggleModal, toggle];
}
export const Modal = ({ toggleModal, onClose, children }: ModalProps): JSX.Element | null => {
  const crossPath = `${process.env.DEVELOPMENT_SERVER}/images/assets/cross.svg`
  if (!toggleModal) return null;
  return (
    <SafeAreaView style={styles.container} focusable={true}>
      <TouchableOpacity style={styles.touchable} onPress={() => onClose()}>
        <SvgUri width={25} height={25} uri={crossPath} color={"white"} />
      </TouchableOpacity>
      <View style={styles.view}>
        {children}
      </View>
    </SafeAreaView>
  )
}
