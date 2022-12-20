import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text } from "react-native";
import { normalize } from "../../utils/helper";
import Home from "../../screens/Home";
import Test from "../../screens/Test";
import Search from "../../screens/Search";
import Webinar from "../../screens/Webinar";
import Forum from "../../screens/Forum";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#40B5C4',
        tabBarAllowFontScaling: false,
        tabBarStyle: {
          height: normalize(60),
          paddingTop: normalize(6),
          backgroundColor: '#FFFF',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ ...styles.tabIcon(focused), ...styles.icon1 }}
              source={require("../../assets/icons/bottomTabs/home.png")}
              resizeMode="contain"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={styles.label(focused)}>HOME</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ ...styles.tabIcon(focused), ...styles.icon2 }}
              source={require("../../assets/icons/bottomTabs/forum.png")}
              resizeMode="contain"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={styles.label(focused)}>FORUM</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Webinar"
        component={Webinar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ ...styles.tabIcon(focused), ...styles.icon2 }}
              source={require("../../assets/icons/bottomTabs/webinar.png")}
              resizeMode="contain"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={styles.label(focused)}>WEBINAR</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ ...styles.tabIcon(focused), ...styles.icon4 }}
              source={require("../../assets/icons/bottomTabs/search.png")}
              resizeMode="contain"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={styles.label(focused)}>SEARCH</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={Test}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ ...styles.tabIcon(focused), ...styles.icon5 }}
              source={require("../../assets/icons/bottomTabs/doctor.png")}
              resizeMode="contain"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={styles.label(focused)}>TEST</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: (active) => ({
    tintColor: active
      ? '#40B5C4':'#2E64A1'
  }),
  icon1: {
    height: normalize(18),
    width: normalize(18),
  },
  icon2: {
    height: normalize(22),
    width: normalize(24),
  },
  icon4: {
    height: normalize(21),
    width: normalize(18),
  },
  icon5: {
    height: normalize(17),
    width: normalize(17),
  },
  label: (active) => ({
    marginBottom: normalize(10),
    fontSize: normalize(9),
    fontWeight: active ? "700" : "500",
  }),
  badge: {
    backgroundColor: "red",
    fontSize: normalize(8),
    fontWeight: "bold",
  },
});
