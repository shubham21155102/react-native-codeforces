import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import codeforces from "./src/screens/codeforces";
import homepage from "./src/screens/homepage";
import practices from "./src/screens/practices";
import upcomingcontest from "./src/screens/upcomingcontest";
import timelimiterrors from "./src/screens/timelimiterrors";
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="homepage" screenOptions={{headerShown:false}}>
        
        <Stack.Screen name="homepage" component={homepage}/>
        <Stack.Screen name="codeforces" component={codeforces}/>
        <Stack.Screen name="practices" component={practices}/>
        <Stack.Screen name="timelimiterrors" component={timelimiterrors}/>
        <Stack.Screen name="upcomingcontest" component={upcomingcontest}/>
      </Stack.Navigator>
    </NavigationContainer>
</>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});