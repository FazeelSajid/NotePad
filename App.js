import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import NotePad from "./App/Screens/NotePad";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import api from "./App/api/api";
// import { useEffect, useState } from "react";
// import Buttons from "./App/Components/Buttons";
// import EditTask from "./App/Screens/EditTask";
// import NewTask from "./App/Screens/NewTask";
// import { useNavigation } from "@react-navigation/native";
import AppStack from "./AppStack";
let Stack = createNativeStackNavigator();

let App = () => {

  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
