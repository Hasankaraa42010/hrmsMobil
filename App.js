import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../hrmsMobil/Screen/LoginScreen'
import HomePage from '../hrmsMobil/Screen/HomePage'
import SignUpScreen from '../hrmsMobil/Screen/SignUpScreen'
import Welcome from './Screen/Welcome';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Kaydolma " component={Welcome} />
      <Stack.Screen name="Giriş Sayfası" component={LoginScreen} />
      <Stack.Screen name="Ana Sayfa" component={HomePage}/>
      <Stack.Screen name='Kaydolma' component={SignUpScreen}/>
    </Stack.Navigator>
  </NavigationContainer>



  );
};

export default App;
