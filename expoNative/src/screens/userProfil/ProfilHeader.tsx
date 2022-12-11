import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/userProfil/ProfilHeader.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProfilHeaderInfo } from "../../api/userApi/userApi";

export const ProfilHeader = () => {
  const [headerInfo, updateHeaderInfo] = useProfilHeaderInfo()
  useEffect(() => {
    updateHeaderInfo();
  }, []);
  console.log({headerInfo})
  console.log(process.env.DEVELOPMENT_SERVER)
  // const headerJsx = headerInfo.map((info, key) => (
  //   <React.Fragment key={key}>
  //     <View style={styles.userNameContainer}>
  //       <Text style={styles.userName}>{info.userName!}</Text>
  //     </View>
  //     <View style={styles.infoContainer}>
  //       <View style={styles.infoSubContainer}>
  //         <Text style={styles.info}>Name: {info.name!}</Text>
  //         <Text style={styles.info}>Location: {info.location!}</Text>
  //       </View>
  //       <View style={styles.infoSubContainer}>
  //         <Text style={styles.info}>
  //           First name: {info.firstName!}
  //         </Text>
  //         <Text style={styles.info}>
  //           Inscription: {new Date(info.creationDate!).toLocaleDateString(["ban", "id"])}
  //         </Text>
  //       </View>
  //     </View>
  //   </React.Fragment>
  // ));
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* {headerJsx} */}
      </View>
    </SafeAreaView>
  );
};