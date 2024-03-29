import React, { useState } from 'react'
import { View,Text,StyleSheet, TextInput, Button, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SignUpScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email , setEmail] = useState('');
  const [job, setJob] = useState('');
  const [experience, setExperience] = useState('');
  const handleLogin=()=>{
    navigation.navigate('Giriş Ekranı');

}
  const handleClick=()=>{
    if(userName=='' && password=='' && email=='' && job=='' && experience==''){
      Alert.alert("Kaydolma başarısız","Tüm alanlar eksiksiz doldurulmalı...");
    }
    else{
      navigation.navigate("Ana Sayfa");
    }
  }
  return (
    <View style={styles.container}>
    <View style={styles.mid}>
    <TextInput
    style={styles.textInputs}
    placeholder='Kullanıcı Adı'
    value={userName}
    onChangeText={setUserName}
    />
    <TextInput
    style={styles.textInputs}
    placeholder='Şifreniz'
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    />
    <TextInput
    style={styles.textInputs}
    placeholder='email'
    value={email}
    onChangeText={setEmail}
    
    />
    <TextInput
    style={styles.textInputs}
    placeholder='job'
    value={job}
    onChangeText={setJob}
    
    />
    <TextInput
    style={styles.textInputs}
    placeholder='experience'
    value={experience}
    onChangeText={setExperience}
    
    />
    </View>
    <Button title='Kaydol' onPress={handleClick}></Button>
    <TouchableOpacity onPress={handleLogin}>
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