import { ReactNode, useState } from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

interface CheckBoxProps {
  value: any;
  action: (value: string) => void;
}


const CheckBox = ({ action, value }: CheckBoxProps): ReactNode => {
  const [check, setCheck] = useState<boolean>(false)
  const onChange = () => {
    setCheck(!check);
    action(value);
  }
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={() => onChange()}>
          {check ?? <Image style={styles.check} source={{ uri: "./check.png" }} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {

  },
  view: {

  },
  button: {

  },
  check: {

  }
})