import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AdminService from '../Service/AdminService';
import { useNavigation } from '@react-navigation/native';
const Applications = ({ dataAdmin}) => {
  const navigation =useNavigation();
  const [advertisements, setAdvertisements] = useState([]);
  const adminId = dataAdmin.id;
  const adminService = new AdminService();

  useEffect(() => {
    adminService.getAdminAdvertisement(adminId).then((res) => {
      setAdvertisements(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [adminId]);

  const handle = (id) => {
    navigation.navigate('Detaybas', { data: id });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {advertisements.map((advertisement, index) => (
            <View key={index} style={styles.jobAdvertisement}>
              <Text style={styles.advertisementTitle}>İş adı: {advertisement.name}</Text>
              <Text style={styles.detail}>İlan adı: {advertisement.jobName}</Text>
              <Text style={styles.detail}>İlan Şehri: {advertisement.city}</Text>
              <Text style={styles.detail}>Maaş: {advertisement.salary} TL</Text>
              <Text style={styles.detail}>İş Alanı: {advertisement.area}</Text>
              <TouchableOpacity onPress={() => handle(advertisement.id)} style={styles.btnButon}>
                <Text style={styles.btnText}>Başvuruları Gör</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Applications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: '80%',
    margin: 25,
  },
  jobAdvertisement: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000',
    paddingLeft: 25,
    marginLeft: 25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  advertisementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  detail: {
    fontSize: 16,
    marginBottom: 3,
    color: '#555',
  },
  btnButon: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
