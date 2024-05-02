import React, { useState } from "react";
import { Dimensions, Image, Text, TouchableHighlight } from "react-native";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Entypo } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const Tab = createMaterialTopTabNavigator();

const AboutScreen = ({data}) => {

  return (
  <View>
   <View style={styleAbout.container}>

                <View style={{flexDirection:"row",backgroundColor:"#fffc"}}>
                <Entypo name='user' size={24} color={"aqua"} style={{margin:10}} />
                <Text style={{marginTop:12,color:"red",fontSize:20}}>Basic İnformation</Text>
                </View>
                <View style={styleAbout.textInfo}>
                  <Text style={{color:"#C0C0C0",fontSize:12}}>Full Name</Text>
                  <Text style={{color:"black",fontSize:19}}>{data.name}</Text>
                </View>
                <View style={styleAbout.textInfo}>
                  <Text style={{color:"#C0C0C0",fontSize:12}}>Email</Text>
                  <Text style={{color:"black",fontSize:19}}>{data.email}</Text>
                </View>
                <View style={styleAbout.textInfo}>
                  <Text style={{color:"#C0C0C0",fontSize:12}}>Job</Text>
                  <Text style={{color:"black",fontSize:19}}>{data.job}</Text>
                </View>
                <View style={styleAbout.textInfo}>
                  <Text style={{color:"#C0C0C0",fontSize:12}}>Area</Text>
                  <Text style={{color:"black",fontSize:19}}>{data.area}</Text>
                </View>
                <View style={styleAbout.textInfo}>
                  <Text style={{color:"#C0C0C0",fontSize:12}}>Phone Number</Text>
                  <Text style={{color:"black",fontSize:19}}>{data.phoneNumber}</Text>
                </View>
                <View style={styleAbout.textInfo}>
                  <Text style={{color:"#C0C0C0",fontSize:12}}>Experience</Text>
                  <Text style={{color:"black",fontSize:19}}>{data.experience}</Text>
                </View>
                
              </View>
  </View>
  );
};
const styleAbout= StyleSheet.create({
  textInfo:{
    backgroundColor:"#fff",
    height:50,
   padding:10,
   paddingLeft:20,
   flexDirection:"column"
  },
  inputtext:{
    backgroundColor:"red",
    height:50,
    
  },
  container: {
    
    
    borderRadius: 20,
    margin:10,
    height:344
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
   
  },
});


const TeamScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Team Screen</Text>
    </View>
  );
};
export default function Profile({ navigation,data }) {
  console.log(1);
  console.log(data);
  console.log(2);
  return (
    <View>
      <View style={styles.topbar}>
        <TouchableHighlight style={styles.otherContainer}>
          <Image
            source={require("../../assets/message.png")}
            style={styles.otherImg}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.profileImgContainer}>
          <Image
            source={require("../../assets/logi.png")}
            style={styles.profileImg}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.otherContainer}>
          <Image
            source={require("../../assets/bildirim.jpg")}
            style={styles.otherImg}
            
          />
        </TouchableHighlight>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: -75,
        }}
      >
        <Text>{data.name}</Text>
        <Text>{data.job}</Text>
      </View > 
        <View style={{backgroundColor:"black", height:height/1}}>
              <Tab.Navigator>
        <Tab.Screen name="Personel" children={()=><AboutScreen data={data}/>} />
        <Tab.Screen name="Company" component={TeamScreen} />
      </Tab.Navigator>
        </View>
      
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screensView: {
    alignItems: "center",
    justifyContent: "center",
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    height: height / 3,
    backgroundColor: "red",
    justifyContent: "center",
  },
  profileImgContainer: {
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 15,
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: "hidden",
  },

  otherContainer: {
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 15,
    height: 60,
    width: 60,
    borderRadius: 40,
    overflow: "hidden",
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  otherImg: {
    backgroundColor:"white",  
    height: 60,
    width: 60,
    borderRadius: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userInfo: {
    marginBottom: 20,
  },
});
