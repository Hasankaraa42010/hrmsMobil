import React, { useState } from 'react'
import { View,Text,StyleSheet, TextInput, Button, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import EmployeeService from '../services/EmployeeService';
import LoginScreen from './LoginScreen';


export default function SignUpScreen({navigation}) {
  const [isim, setIsım] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [permission, setPermission] = useState('');
  
  const handleSignUp = () => {
    if (city=='') {
      Alert.alert("Kaydolma başarısız", "Tüm alanlar eksiksiz doldurulmalı...");
    } else {
      const employeeService = new EmployeeService();
      employeeService.signIn({
        isim,
        password,
        phoneNumber,
        role,
        username,
        city,
        permission
      }).then(response => {
        console.log('Kaydolma başarılı:', response);
        navigation.navigate("Ana Sayfa");
      }).catch(error => {
        console.error('Kaydolma hatası:', error);
        Alert.alert("Kaydolma hatası", error.message);
      });
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.mid}>
        <TextInput
          style={styles.textInputs}
          placeholder='Ad'
          value={isim}
          onChangeText={setIsım}
        />
  
        <TextInput
          style={styles.textInputs}
          placeholder='Şifre'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
  
        <TextInput
          style={styles.textInputs}
          placeholder='Telefon Numarası'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
  
        <TextInput
          style={styles.textInputs}
          placeholder='Rol'
          value={role}
          onChangeText={setRole}
        />
  
        <TextInput
          style={styles.textInputs}
          placeholder='Kullanıcı Adı'
          value={username}
          onChangeText={setUsername}
        />
  
        <TextInput
          style={styles.textInputs}
          placeholder='Şehir'
          value={city}
          onChangeText={setCity}
        />
  
        <TextInput
          style={styles.textInputs}
          placeholder='İzin'
          value={permission}
          onChangeText={setPermission}
        />
      </View>
      <Button title='Kaydol' onPress={handleSignUp}></Button>
      <TouchableOpacity onPress={() => navigation.navigate('Giriş Ekranı')}>
        <Text>Hesabınız varsa tıklayın</Text>
      </TouchableOpacity>
    </View>
  )
  
}
const styles=StyleSheet.create({
  textInputs:{
    borderWidth:1,
    borderColor:'black',
    borderRadius:5,
    padding:10,
    width:200,

  },
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'red'
  },
  mid:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white'
  }
})