import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// eso es un componente de los felx box
export default function MyApp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7d7f7d',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
  },
  purpleBox: {
    marginLeft: 'auto',
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#FFA500',
  },
  blueBox: {
    marginRight: 'auto',
    backgroundColor: '#001855',
  },
});
