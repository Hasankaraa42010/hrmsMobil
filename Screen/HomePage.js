import React, { useEffect, useState } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Profile, JobAdvertisement, MyApplications, LastJobs } from "./HomePageScreens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import EmployeeService from '../services/EmployeeService';

const Tab = createBottomTabNavigator();
export default function HomePage() {
  const [data, setData] = useState([])
  const route = useRoute();
  const email = route.params?.data;
  const employeeService=new EmployeeService();
  useEffect(() => {
    employeeService.getEmployee(email).then((result)=>{
    setData(result.data)
    })
  }, [email])
  return (
    <Tab.Navigator>
      <Tab.Screen name="Job Advertisement" children={()=><JobAdvertisement dataEmployee={data}/>}
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
      <Tab.Screen name="My Applications"  children={()=><MyApplications dataEmployee={data}/>}
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
      <Tab.Screen name="Last Jobs" children={()=><LastJobs data={data}/>}
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
}

const styles = StyleSheet.create({
  screensView: {
    alignItems: "center",
    justifyContent: "center",
  }
})
