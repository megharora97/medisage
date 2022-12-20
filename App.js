import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Navigator from "./src/navigator";

export default function App() {
  return (
    <SafeAreaView  style={{flex:1}}>
      <Navigator />
    </SafeAreaView>

  );
};
