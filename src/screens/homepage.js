import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);
const HomePage = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
    <SafeAreaView style={styles.container}>
    <View>
      
      <Button
        title="Rating Changes CODEFORCES"
        onPress={() => navigation.navigate("codeforces")}
      />
    </View>
    <Separator />
    <View>
      
      <Button
        title="Codeforces practices"
        color="#f194ff"
        onPress={() => navigation.navigate("practices")}
      />
    </View>
    <Separator />
    <View>
      
      <Button
        title="Upcoming Contests"
        color="#f100ff"
        onPress={() => navigation.navigate("upcomingcontest")}
      />
    </View>
    <Separator />
    <View>
      
      <Button
        title="Time Limit Errors"
        color="#f100ff"
        onPress={() => navigation.navigate("timelimiterrors")}
      />
    </View>
   
  </SafeAreaView>
  </View>
  )
}
const styles = StyleSheet.create({
    maincontainer: {
    flex: 1,
    // justifyContent: 'center',
    // marginHorizontal: 16,
    backgroundColor:'gray'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor:'gray'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomePage