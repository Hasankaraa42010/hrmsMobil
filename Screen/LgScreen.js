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
import EmployeeService from "../services/EmployeeService";
const { height } = Dimensions.get("window");
export default function LgScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const employeeService = new EmployeeService();
    employeeService
      .login({ email, password })
      .then((result) => {
        if (result.success == true) navigation.navigate("Ana Sayfa");
        else Alert.alert("Hatalı giriş", result.message);
      })
      .catch((response) => {
        console.log(response);
        Alert.alert(response);
      });
  };
  return (
    <SafeAreaView>
        <View>
        <ImageBackground
          style={{ height: height /3,  marginTop:20}}
          resizeMode="contain"
          source={require("../assets/logi.png")}
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
           Giriş Yap
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Kaydolma")}
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Yeni Hesab Aç
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
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
