import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Profile, JobAdvertisement, MyApplications, LastJobs } from "./HomePageScreens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomePage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Job Advertisement" component={JobAdvertisement}
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
      <Tab.Screen name="My Applications" component={MyApplications}
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
      <Tab.Screen name="Last Jobs" component={LastJobs}
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
      <Tab.Screen name="My Profile" component={Profile}
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
