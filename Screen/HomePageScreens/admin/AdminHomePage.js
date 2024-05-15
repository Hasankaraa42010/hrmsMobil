import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { View ,StyleSheet} from 'react-native';
import AdminService from "./Service/AdminService"
import {AddJob,MyWorkers,Profile,Applications} from "./homepagescreen";

const Tab = createBottomTabNavigator();
export default function AdminHomePage() {
    const [data, setData] = useState([])
    const route = useRoute();
    const email = route.params?.data;
    const adminService=new AdminService();
    useEffect(() => {
      adminService.getAdmin(email).then((result)=>{
      setData(result.data)
      console.log(data);
      })
    }, [email])

  return (
    <Tab.Navigator>
    <Tab.Screen name="Applications"  children={()=><Applications dataAdmin={data}/>}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={styles.screensView}>
              <Entypo name='briefcase' size={24} color={focused ? "#16247d" : "#111"} />
            </View>
          )
        }
      }}
    />
    <Tab.Screen name="Add Advertisement" children={()=><AddJob dataAdmin={data}/>}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={styles.screensView}>
              <Entypo name='documents' size={24} color={focused ? "#16247d" : "#111"} />
            </View>
          )
        }
      }}
    />
    <Tab.Screen name="My Worker" component={MyWorkers}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={styles.screensView}>
              <Entypo name='archive' size={24} color={focused ? "#16247d" : "#111"} />
            </View>
          )
        }
      }}
    />
    <Tab.Screen name="My Profile" children={()=><Profile data={data}/>}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={styles.screensView}>
              <Entypo name='user' size={24} color={focused ? "#16247d" : "#111"} />
            </View>
          )
        }
      }}
    />
  </Tab.Navigator>
  )
};
const styles = StyleSheet.create({
    screensView: {
      alignItems: "center",
      justifyContent: "center",
    }
  })