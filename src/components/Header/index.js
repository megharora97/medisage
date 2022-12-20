import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { normalize } from "../../utils/helper";
import DismissKeyboard from "../DismissKeyboard";
import PropTypes from "prop-types";

export default function Header() {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Entypo
          name={'menu'}
          size={normalize(24)}
          color={'#2E64A1'}
        />
        <View style={styles.main}>
        <Image source={require('../../assets/images/logo.png')}
          style={{ height: normalize(40), width: normalize(75), }}
          resizeMethod='resize'
          resizeMode='contain' />
        </View>
        
        <Entypo name="bell" size={24} color='#2E64A1' />
      </View>

    </DismissKeyboard>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

Header.defaultProps = {
  title: "",
  onPress: null,
  cross: false,
  rightIcon: false
};
