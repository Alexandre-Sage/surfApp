import React, { ReactNode, useState } from "react";
import { SafeAreaView, StyleProp, StyleSheet, StyleSheetProperties, Text, TouchableOpacity, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import Svg, { SvgUri, SvgFromUri } from "react-native-svg";
import { styles } from "../../styles/input/dropDown.style"
interface DropdownInputProps {
  listItemToMap: any[],
  action: (value: string) => void,
  name: string
};

interface DropDownListProp extends Omit<DropdownInputProps, "name"> {
  display: boolean
}

const DropDownList = ({ listItemToMap, action, display }: DropDownListProp) => {
  const listJsx = listItemToMap.map((item, key) => (
    <TouchableOpacity key={key} onPress={() => action(item)} style={styles.listItem}>
      <Text style={styles.listItemText}>{item}</Text>
    </TouchableOpacity>
  ))
  if (!display) return null;
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.listCtn}>
        {listJsx}
      </View>
    </ScrollView>
  )
}

export const DropdownInput = ({ listItemToMap, action, name }: DropdownInputProps) => {
  const [displayList, setList] = useState<boolean>(false)
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainView}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => setList(!displayList)}>
            <Text style={styles.buttonText}>{name}</Text>
            <SvgUri width={20} height={20} uri={`${process.env.DEVELOPMENT_IMAGE_SERVER}/images/assets/polygon.svg`} />
          </TouchableOpacity>
        </View>
        <DropDownList
          listItemToMap={listItemToMap}
          action={action}
          display={displayList}
        />
      </View>
    </SafeAreaView>
  );
};

const test: StyleProp<Object> = {
  borderWidth: 1,
  borderColor: "red",
}

