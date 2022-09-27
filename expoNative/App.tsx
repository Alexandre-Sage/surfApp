import React from "react";
import { Platform, UIManager } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LandingPage from "./src/screens/landingPage/LandingPage";
import UserProfil from "./src/screens/userProfil/userProfil";
import UserCamera from "./src/components/camera/Camera";
//import Preview from "./src/components/camera/Preview";
import FullScreen from "./src/components/picture/FullScreen";
import Preview from "./src/components/picture/Preview";
import { FullScreenProps } from "./src/components/picture/FullScreen";
export type RootStackParamList = {
  LandingPage: undefined,
  UserProfil: undefined,
  //Upload: undefined,
  Camera: undefined,
  Preview: undefined,
  FullScreen: { imagePath: string; },
}
const Stack = createStackNavigator<RootStackParamList>();
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  };
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: "Welcome" }} />

          <Stack.Screen name="UserProfil" component={UserProfil} />
          <Stack.Screen name="Preview" component={Preview} />

          <Stack.Screen name="FullScreen" component={FullScreen} />
          <Stack.Group>
            <Stack.Screen name="Camera" component={UserCamera} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

/**/
