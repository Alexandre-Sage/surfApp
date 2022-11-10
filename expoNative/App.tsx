import React from "react";
import { Platform, UIManager } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LandingPage from "./src/screens/landingPage/LandingPage";
import UserProfil from "./src/screens/userProfil/userProfil";
import UserCamera from "./src/components/camera/Camera";
import FullScreen from "./src/components/picture/FullScreen";
import Preview from "./src/components/picture/Preview";
import AddSpotScreen from "./src/screens/userProfil/spot/AddSpot";
import Gallery from "./src/screens/userProfil/picture/Gallery";
import { Header } from "./src/components/header/Header";
import { ImageInfo } from "expo-image-picker";
export type RootStackParamList = {
  LandingPage: undefined,
  UserProfil: undefined,
  Gallery: undefined,
  Camera: undefined,
  Preview: { images: Array<Omit<ImageInfo, 'cancelled'> | ImageInfo> },
  FullScreen: { imagePath: string; },
  AddSpot: undefined
}
const Stack = createStackNavigator<RootStackParamList>();
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  };
};
const profilHeaderStyle = {
  backgroundColor: "rgba(30, 30, 30, 1)",
  height: 110,
  borderTopWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.3)"
}



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={
            {
              headerStyle: {
                backgroundColor: "rgba(30, 30, 30, 1)",
                borderTopWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.3)"
              },
              headerTintColor: '#fff'
            }
          }
        >
          <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: "Welcome" }} />
          <Stack.Screen
            name="UserProfil"
            component={UserProfil}
            options={{
              headerStyle: { ...profilHeaderStyle },
              headerTitle: () => <Header title={"Profil"} />
            }}
          />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="FullScreen" component={FullScreen} />
          <Stack.Screen name="Preview" component={Preview} />
          <Stack.Screen name="Camera" component={UserCamera} />
          <Stack.Screen name="AddSpot" component={AddSpotScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

/**/
