import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Upcoming from "../screens/Home/Upcoming";
import Past from "../screens/Home/Past";

const Stack = createNativeStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFF' }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="Upcoming" component={Upcoming} />
          <Stack.Screen name="Past" component={Past} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
