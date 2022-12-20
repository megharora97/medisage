import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import Header from "../../components/Header";
import SwitchTab from "../../components/SwitchTab";
import Past from "./Past";
import { styles } from "./styles";
import Upcoming from "./Upcoming";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Image source={{ uri: 'https://d3qziwubca5qnz.cloudfront.net/slider/1634559936Banne_Homepage.jpg' }} style={styles.main}
        resizeMethod='resize' />
      <SwitchTab
        activeTab={0}
        items={["UPCOMING", "PAST"]}
        component={[<Upcoming />, <Past />]}
      />
    </SafeAreaView>
  );
}
