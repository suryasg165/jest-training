import React from "react";
import { StyleSheet, Text, View } from "react-native";
export const WELCOME_MSG = "Open up App.js to start working on your app!";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the developer menu. -1</Text>
      </View>
    );
  }
}

export class Sample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{WELCOME_MSG}</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the developer menu. -1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
