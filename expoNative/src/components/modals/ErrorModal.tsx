import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../buttons/Button";
interface ErrorModalProps {
  message: string,
  displayModal: boolean
  close: () => void
}

export const useError = (): {
  errorMessage: string,
  setErrorMessage: (message: string) => void,
  toggleErrorModal: boolean,
  setToggleErrorModal: () => void,
} => {
  const [errorMessage, setMessage] = useState<string>("");
  const [toggleErrorModal, setToggleModal] = useState<boolean>(false);
  const setErrorMessage = (message: string) => setMessage(message);
  const setToggleErrorModal = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setToggleModal(toggleErrorModal ? false : true)
  };
  return { errorMessage, setErrorMessage, toggleErrorModal, setToggleErrorModal }
}
export const ErrorModal = ({ message, displayModal, close }: ErrorModalProps): any => {
  return (
    <React.Fragment>
      {displayModal ? <SafeAreaView style={styles.container} >
        <View style={{ ...styles.mainContainer }} >
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button aditionalStyles={styles.button} containerStyle={{ width: 248 }} onPressFunction={close} text="Close" />
          </View>
        </View >
      </SafeAreaView > : null
      }
    </React.Fragment >
  )
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: "90%",
    backgroundColor: "rgba(150, 150, 150, 0.98)",
    position: "absolute",
    bottom: 175,
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"

  },
  mainContainer: {
    width: "90%",
    height: "100%",
    margin: "auto",
  },
  messageContainer: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: "5%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    backgroundColor: "rgba(30, 30, 30, 0.8)"
  }
})