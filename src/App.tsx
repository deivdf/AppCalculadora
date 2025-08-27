import React from 'react';
import CaculadoraScreen from './presetation/screens/CalculatorScreen';
/*
se utiliza para no tomar espacio de la pantalla completa
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';*/
import { StatusBar, View } from 'react-native';
import { styles } from './presetation/theme/app-theme';
export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CaculadoraScreen />
    </View>
  );
}
