import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculadora from './src/screens/Calculadora';
import CalculadoraCientifica from './src/screens/CalculadoraCientifica';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Calculadora'>
        <Stack.Screen name='Calculadora' component={Calculadora}/>
        <Stack.Screen name='CalculadoraCientifica' component={CalculadoraCientifica}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
