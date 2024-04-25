import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profile({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Bilgileri</Text>
      <View style={styles.userInfo}>
        <Text>Kullanıcı Adı: JohnDoe</Text>
        <Text>Adı Soyadı: John Doe</Text>
        <Text>E-posta: johndoe@example.com</Text>
        {/* Diğer bilgiler buraya eklenebilir */}
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Profil Düzenle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText} onPress={() =>navigation.navigate("İlkGiriş")} >Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfo: {
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
