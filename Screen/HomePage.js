import { View, Text ,Platform} from 'react-native'
import {Home,Setting,Profile} from "./HomePageScreens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
const Tab=createBottomTabNavigator();

export default function HomePage() {
  return (
   <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon:({focused})=>{
          return (
            <View style={{alignItems:"center",justifyContent:"center"}}>
              <Entypo name='home' size={24} color={focused ?"#16247d":"#111"}
              />
              <Text style={{fontSize:12,color:"#16247d"}}>Home</Text>
            </View>
          )
        }
      }}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
   </NavigationContainer>
  )
}