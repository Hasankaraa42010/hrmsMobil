import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/eski/LoginScreen'
import HomePage from '../hrmsMobil/Screen/HomePage'
import SignUpScreen from './Screen/eski/SignUpScreen'
import Welcome from './Screen/Welcome';
import LgScreen from './Screen/LgScreen';
import SgScreen from './Screen/SgScreen';
import AdminLoginScreen from './Screen/HomePageScreens/admin/AdminLoginScreen';
import AdminHomePage from './Screen/HomePageScreens/admin/AdminHomePage';
import Detay from './Screen/HomePageScreens/admin/homepagescreen/Detay';
import ApplicationDetails from './Screen/HomePageScreens/admin/homepagescreen/ApplicationDetails';




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
      <Stack.Screen name='Admin Ana Sayfa' component={AdminHomePage}/>
      <Stack.Screen name='Kaydolma Ekranı' component={SgScreen}/>
      <Stack.Screen name='Admin Giris' component={AdminLoginScreen}/>
      <Stack.Screen name='Detay' component={Detay}/>
      <Stack.Screen name='Detaybas' component={ApplicationDetails}/>
    </Stack.Navigator>
  </NavigationContainer>

 


  );
};

export default App;
