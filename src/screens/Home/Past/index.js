import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Pas } from "../../../constants/dummy";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function Past() {
  const renderItem = (item, index) => {
    return (
      <View key={index} style={styles.mainn}>
        <View style={styles.box}>
          <View style={styles.datee}>
            <Text style={styles.dt}>{item.date}</Text>
            <Text style={styles.mont}>{item.month}</Text>
          </View>
          <Image source={{ uri: item.img }} style={styles.imgg} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.diseasee}>
          <Text style={{ ...styles.title, color: "rgba(10, 44, 63, 0.75)" }}>
            {item.disease}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo
              name="clock"
              size={20}
              color="#2E64A1"
              style={styles.time}
            />
            <Text style={{ ...styles.title, color: "rgba(10, 44, 63, 0.75)" }}>
              {" "}
              {item.time}
            </Text>
          </View>
        </View>
        <View style={styles.butt}>
          <Pressable style={styles.button(false)}>
            <Text style={styles.text(false)}>Register Now</Text>
          </Pressable>
          <Pressable style={styles.button(false)}>
            <Text style={styles.text(false)}>Details</Text>
          </Pressable>
        </View>
        <Pressable style={styles.button(true)}>
          <Text style={styles.text(true)}>Invite</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: "5%" }}
      showsVerticalScrollIndicator={false}
    >
      {Pas.map(renderItem)}
    </ScrollView>
  );
}
