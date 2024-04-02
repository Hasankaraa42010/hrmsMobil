import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import EmployeeService from "../services/EmployeeService";
const { height } = Dimensions.get("window");
export default function SgScreen({ navigation }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    city: "",
    job: "",
    experience: "",
    area: "",
  });
  const handleSignUp = () => {
    const employeeService = new EmployeeService();
    employeeService
      .signIn(data)
      .then((result) => {
        if (result.success == true) navigation.navigate("Ana Sayfa");
        else Alert.alert("Hatalı giriş", result.message);
      })
      .catch((error) => {
        console.log(error);
      });
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
            source={require("../assets/signUp.png")}
          />
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                color: "#1F41BB",
                marginVertical: -25,
              }}
            >
              Kaydol
            </Text>
          </View>

          <View style={{ marginVertical: 30 }}>
            <TextInput
              value={data.name}
              onChangeText={(text) => handleChange("name", text)}
              placeholder="İsim soyisim"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholder="Email"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.password}
              onChangeText={(text) => handleChange("password", text)}
              secureTextEntry
              placeholder="Şifre"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.phoneNumber}
              onChangeText={(text) => {
                if (/^\d+$/.test(text) || text === "") {
                  handleChange("phoneNumber", text);
                }
              }}
              keyboardType="number-pad"
              placeholder="Telefon numarası"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.city}
              onChangeText={(text) => handleChange("city", text)}
              placeholder="Şehir"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.job}
              onChangeText={(text) => handleChange("job", text)}
              placeholder="Meslek"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
            <TextInput
              value={data.experience}
              onChangeText={(text) => {
                if (/^\d+$/.test(text) || text === "") {
                  handleChange("experience", text);
                }
              }}
              placeholder="Deneyim"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
              keyboardType="number-pad"
            />
            <TextInput
              value={data.area}
              onChangeText={(text) => handleChange("area", text)}
              placeholder="Alan"
              placeholderTextColor={"#000"}
              style={styles.textInputBtn}
            />
          </View>
          <TouchableOpacity onPress={handleSignUp} style={styles.loginButon}>
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
            onPress={() => navigation.navigate("Giriş Sayfası")}
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
              Hesabınız varsa tıklayın
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textInputBtn: {
    fontSize: 20,
    backgroundColor: "#f1f4ff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  scrollView: {
    flexGrow: 2,
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
