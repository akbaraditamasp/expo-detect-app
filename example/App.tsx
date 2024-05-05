import { StyleSheet, Text, View } from "react-native";

import * as ExpoDetectApp from "expo-detect-app";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log(ExpoDetectApp.detect("expo.modules.detectapp.example"));
  }, []);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
