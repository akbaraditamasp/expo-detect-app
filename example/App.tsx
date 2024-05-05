import { StyleSheet, Text, View } from 'react-native';

import * as ExpoDetectApp from 'expo-detect-app';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoDetectApp.hello()}</Text>
    </View>
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
