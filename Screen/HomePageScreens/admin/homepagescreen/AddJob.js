import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import AdminService from "../Service/AdminService";

const { height } = Dimensions.get("window");
const AddJob = ({dataAdmin}) => {
  const [data, setData] = useState({
    jobName: "",
    city: "",
    name:"", // ilan adı
    adminId:dataAdmin.id,
    salary:"",
    area:"",
  });
  
  const handleAddJob = () => {
    const adminService=new AdminService();
    adminService.addJob(data).then((res)=>{
      
      if(res.success===true){
       
        Alert.alert("Başarıyla Eklendi",res.message)
      }
      else{
        Alert.alert("Başarısız",res.message)
      }
    }).catch((err)=>{
      console.log(err);
    })
  };
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <ImageBackground
          style={{ height: height / 3, marginTop: 20 }}
          resizeMode="contain"
          source={require("../assets/jobAdd.jpg")}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            color: "#1F41BB",
            textAlign: "center",
          }}
        >
          İş Ekle
        </Text>
      </View>
     
      <View style={{ marginVertical: 30 }}>
      <TextInput
              value={data.name}
              onChangeText={(text) => handleChange("name", text)}
              placeholder="İlan Adı"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.city}
              onChangeText={(text) => handleChange("city", text)}
              placeholder="Şehir Adı"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.jobName}
              onChangeText={(text) => handleChange("jobName", text)}
              placeholder="İş Adı"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
             <TextInput
              value={data.area}
              onChangeText={(text) => handleChange("area", text)}
              placeholder="Alan"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
             <TextInput
              value={data.salary}
              onChangeText={(text) => handleChange("salary", text)}
              placeholder="Maaş"
              placeholderTextColor={"#000"}
              keyboardType="number-pad"
              style={styles.textInputBtn}
            />
              <TouchableOpacity onPress={handleAddJob} style={styles.loginButon}>
            <Text
              style={{
                color: "#ffff",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Ekle
            </Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddJob;

const styles = StyleSheet.create({
  textInputBtn: {
    fontSize: 20,
    backgroundColor: "#f1f4ff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  loginButon: {
    padding: 20,
    backgroundColor: "#1F41BB",
    marginVertical: 30,
    borderRadius: 20,
    shadowColor: "#1F41BB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

});
