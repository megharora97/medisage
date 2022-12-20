import React, { useState } from "react";
import {
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { normalize } from "../../utils/helper";
import { styles } from "./styles";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function SwitchTab({ items, component, style, activeTab }) {
  const [active, setActive] = useState(activeTab ? activeTab : 0);

  const _renderItem = (item, index) => {
    let activeStyle = {};
    let textColor = "rgba(21, 34, 69, 0.45)";
    if (active == index) {
      activeStyle = {
        backgroundColor: "white",
        fontSize: normalize(12),
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        fontWeight: "700",
        borderRadius: 10,
      };
      textColor = "#384057";
    }

    return (
      <TouchableOpacity
        key={index}
        style={{
          ...styles.itemContainer,
          ...activeStyle,
          ...style,
        }}
        activeOpacity={0.9}
        onPress={() => {
          setActive(index);
        }}
      >
        <Text
          allowFontScaling={false}
          style={{ ...styles.tabText, color: textColor }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.barList}>{items.map(_renderItem)}</View>
      <View style={{ flex: 1 }}>{component[active]}</View>
    </View>
  );
}


