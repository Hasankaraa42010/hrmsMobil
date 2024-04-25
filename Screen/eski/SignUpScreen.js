import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EmployeeService from "../../services/EmployeeService";

export default function SignUpScreen({ navigation }) {
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

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleSignUp = () => {
    const employeeService = new EmployeeService();
    employeeService
      .signIn(data)
      .then((result) => {
        if(result.success==true) navigation.navigate("Ana Sayfa")
        else Alert.alert("Hatalı giriş",result.message)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.mid}>
        <TextInput
          style={styles.textInputs}
          placeholder="İsim Soyisim"
          value={data.name}
          onChangeText={(text) => handleChange("name", text)}
        />

        <TextInput
          style={styles.textInputs}
          placeholder="Email"
          value={data.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Şifre"
          value={data.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
        />

        <TextInput
          style={styles.textInputs}
          placeholder="Telefon no"
          value={data.phoneNumber}
          onChangeText={(text) => handleChange("phoneNumber", text)}
        />

        <TextInput
          style={styles.textInputs}
          placeholder="Şehir"
          value={data.city}
          onChangeText={(text) => handleChange("city", text)}
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Meslek"
          value={data.job}
          onChangeText={(text) => handleChange("job", text)}
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Deneyim"
          value={data.experience}
          onChangeText={(text) => handleChange("experience", text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Alan"
          value={data.area}
          onChangeText={(text) => handleChange("area", text)}
        />
      </View>
      <Button title="Kaydol" onPress={handleSignUp}></Button>
      <TouchableOpacity onPress={() => navigation.navigate("Giriş Sayfası")}>
        <Text>Hesabınız varsa tıklayın</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  textInputs: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  mid: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
