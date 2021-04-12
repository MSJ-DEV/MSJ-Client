import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello MSJ-DEV</Text>
      <Text>hello MSJ-DEV</Text>
      <Text>hello MSJ-DEV</Text>
      <Text>hello MSJ-DEV</Text>
      <Text>hello elyes </Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
