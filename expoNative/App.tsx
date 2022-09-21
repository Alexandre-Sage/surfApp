import React from "react";
import { Platform, UIManager } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LandingPage from "./src/screens/landingPage/LandingPage";
import UserProfil from "./src/screens/userProfil/userProfil";
import UserCamera from "./src/components/camera/Camera";

export type RootStackParamList = {
  LandingPage: undefined,
  UserProfil: undefined,
  Camera: undefined,
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
          <Stack.Screen name="Camera" component={UserCamera} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

/**/
