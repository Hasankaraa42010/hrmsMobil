import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Profile = ({data}) => {
  const admin = data;
  useEffect(() => {
    console.log(admin);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{admin.email}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Yetki:</Text>
          <Text style={styles.value}>{admin.permision}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Telefon:</Text>
          <Text style={styles.value}>{admin.phoneNumber}</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginRight: 10,
    width: 100, // Sabit genişlik vererek hizalama sağlar
  },
  value: {
    fontSize: 16,
    color: '#495057',
    flex: 1, // Geri kalan alanı kaplar
  },
});
