import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../hrmsMobil/Screen/LoginScreen'
import HomePage from '../hrmsMobil/Screen/HomePage'
import SignUpScreen from '../hrmsMobil/Screen/SignUpScreen'



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
