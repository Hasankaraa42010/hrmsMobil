import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AdminService from "./Service/AdminService";
const { height } = Dimensions.get("window");
export default function AdminLoginScreen({navigation}) {
    const handleLogin = () => {
        const adminService = new AdminService();
        adminService
          .login({ email, password })
          .then((result) => {
           
            if (result.success == true) 
            navigation.navigate("Admin Ana Sayfa",{data:email});
            else {Alert.alert("Hatalı giriş", result.message);
            

            }
          })
          .catch((response) => {
            console.log(response);
            Alert.alert(response);
          });
      };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
        <View>
        <ImageBackground
          style={{ height: height /3,  marginTop:20}}
          resizeMode="contain"
          source={require("../../../assets/indir.jpeg")}
        />
        </View>
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text 
            style={{
              fontSize: 30,
              color: "#1F41BB",
              marginVertical: 10,
            }}
          >
           Admin Girişi
          </Text>
          <Text
            style={{
              fontSize: 20,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Email ve şifren ile hızlıca giriş yap
          </Text>
        </View>
        <View
          style={{
            marginVertical: 30,
          }}
        >
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={"#000"}
            style={styles.textInputBtn}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Parola"
            placeholderTextColor={"#000"}
            style={styles.textInputBtn}
          />
        </View>
        <View>
          <Text
            style={{
              alignSelf: "flex-end",
              color: "#1F41BB",
              fontSize: 12,
            }}
          >
            Şifreni mi unuttun?
          </Text>
        </View>
      
        <TouchableOpacity onPress={handleLogin} style={styles.loginButon}>
          <Text
            style={{
              color: "#ffff",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Giriş Yap
          </Text>
        </TouchableOpacity>
        
        
        
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
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
    textInputBtn: {
      fontSize: 20,
      backgroundColor: "#f1f4ff",
      padding: 20,
      borderRadius: 10,
      marginVertical: 10,
    },
  });