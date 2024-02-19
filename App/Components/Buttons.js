import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const Buttons = ({onPress, iconName, iconColor, title, backgroundColor}) => {
  // let presshandler = () => {
  //   console.log("Pressed");
  // }

  return (
    <Pressable onPress={onPress}>
      <View
        style={[ {backgroundColor: backgroundColor},title ? styles.container : '']}
      >
        <Text style={styles.btnText}>
          { iconName ?  <Icon source={iconName} color={iconColor} size={30} /> : title }
        </Text>
      </View>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 15,
    // width: 80,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: '700'
  }
});
