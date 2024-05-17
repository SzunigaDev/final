import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen'; 
import CalculatorScreen from '../screens/CalcScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Principal"   component={HomeScreen} /> 
      <Stack.Screen name="Calculadora" component={CalculatorScreen} /> 
    </Stack.Navigator>
  );
};

export default AppNavigator;
