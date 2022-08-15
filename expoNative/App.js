import React from "react";
import { Platform, UIManager } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./src/screens/landingPage/LandingPage";
import { NavigationContainer } from "@react-navigation/native";
import UserProfil from "./src/screens/userProfil/userProfil";
const Stack = createStackNavigator();
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  };
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: "Welcome" }} />
        <Stack.Screen name="UserProfil" component={UserProfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/**/
