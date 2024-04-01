import React, { useState } from 'react'
import { View ,StyleSheet, Text, Button, Alert, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import EmployeeService from '../services/EmployeeService';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp=()=>{
        navigation.navigate('Kaydolma');

    }
    const handleLogin=()=>{
       const employeeService=new EmployeeService();
       employeeService.login({email,password}).then(result=>{
        if(result.success==true)  navigation.navigate("Ana Sayfa")
        else Alert.alert("Hatalı giriş",result.message);
       }).catch(response=>{
        console.log(response);
       })
    }
  return (
    <View style={styles.container}>
        <View style={styles.mid}>
        <TextInput
        style={styles.textInputs}
        placeholder='email'
        value={email}
        onChangeText={setEmail}
        />
        <TextInput
        style={styles.textInputs}
        placeholder='Şifreniz'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        </View>
        <Button title='Giriş Yap' onPress={handleLogin}/>
        <TouchableOpacity onPress={handleSignUp}>
        <Text>Hesabınız yoksa kaydolun</Text>
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