import React from "react";
import { Dimensions, Image, Text, TouchableHighlight } from "react-native";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Entypo } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const Tab = createMaterialTopTabNavigator();

const AboutScreen = ({ data }) => {
  return (
    <View style={styles.aboutContainer}>
      <View style={styles.header}>
        <Entypo name='user' size={24} color={"#007AFF"} style={styles.icon} />
        <Text style={styles.headerText}>Basic Information</Text>
      </View>
      {Object.entries(data).map(([key, value]) => (
        <View style={styles.infoRow} key={key}>
          <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1')}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const TeamScreen = () => {
  return (
    <View style={styles.teamContainer}>
      <Text>Team Screen</Text>
    </View>
  );
};

export default function Profile({ navigation, data }) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.topbar}>
        <TouchableHighlight style={styles.iconContainer}>
          <Image source={require("../../assets/message.png")} style={styles.iconImage} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.profileImageContainer}>
          <Image source={require("../../assets/logi.png")} style={styles.profileImage} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.iconContainer}>
          <Image source={require("../../assets/bildirim.jpg")} style={styles.iconImage} />
        </TouchableHighlight>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.job}>{data.job}</Text>
      </View>
      <View style={styles.tabsContainer}>
        <Tab.Navigator>
          <Tab.Screen name="Personel" children={() => <AboutScreen data={data} />} />
          <Tab.Screen name="Company" component={TeamScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    height: height / 3.5,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    paddingTop: 30,
  },
  profileImageContainer: {
    borderColor: "#fff",
    borderWidth: 2,
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: "hidden",
  },
  profileImage: {
    height: "100%",
    width: "100%",
  },
  iconContainer: {
    borderColor: "#fff",
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  iconImage: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  profileInfo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  job: {
    fontSize: 18,
    color: "#555",
  },
  tabsContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  aboutContainer: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  label: {
    color: "#888",
    fontSize: 14,
  },
  value: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
  },
  teamContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
