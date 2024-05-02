import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/eski/LoginScreen'
import HomePage from '../hrmsMobil/Screen/HomePage'
import SignUpScreen from './Screen/eski/SignUpScreen'
import Welcome from './Screen/Welcome';
import LgScreen from './Screen/LgScreen';
import SgScreen from './Screen/SgScreen';




const Stack = createStackNavigator();

const App = () => {
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
  //     <Stack.Screen name="Kaydolma " component={Welcome} />
  //     <Stack.Screen name="Giriş Sayfası" component={LgScreen} />
  //     <Stack.Screen name="Ana Sayfa" component={HomePage}/>
  //     <Stack.Screen name='Kaydolma' component={SgScreen}/>
  //   </Stack.Navigator>
  // </NavigationContainer>
     <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="İlkGiriş" screenOptions={{headerShown:false}}>
      <Stack.Screen name="İlkGiriş " component={Welcome} />
      <Stack.Screen name="Giriş Sayfası" component={LgScreen} />
      <Stack.Screen name="Ana Sayfa" component={HomePage}/>
      <Stack.Screen name='Kaydolma Ekranı' component={SgScreen}/>
    </Stack.Navigator>
  </NavigationContainer>

 


  );
};

export default App;
