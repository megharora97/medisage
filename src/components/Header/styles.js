import { StyleSheet } from "react-native";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    width: "100%",
    height: normalize(40),
    alignItems: "center",
    backgroundColor: '#FFFF',
    justifyContent:'space-around'
  },
  main:{width:'40%',alignItems:'center'}
});
