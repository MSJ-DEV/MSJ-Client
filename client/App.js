
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './src/components/cards'
import MyApp from './src/navigation/index'
export default function App() {
  return (
    <View>
       {/* < Cards /> */}
            <MyApp />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ddd',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
