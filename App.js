import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../HrmsApp/Screen/LoginScreen'
import HomePage from '../HrmsApp/Screen/HomePage'
import SignUpScreen from '../HrmsApp/Screen/SignUpScreen'



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="Giriş Ekranı" component={LoginScreen} />
      <Stack.Screen name="Ana Sayfa" component={HomePage} />
      <Stack.Screen name='Kaydolma' component={SignUpScreen}/>
    </Stack.Navigator>
  </NavigationContainer>



  );
};

export default App;
