import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmployeeService from '../../services/EmployeeService';

export default function LastJobs({ data }) {
  const [lastWorks, setLastWorks] = useState([])
  const employeeId = data.id;
  const employeeService = new EmployeeService();

  useEffect(() => {
    employeeService.getLastWorks(employeeId)
      .then((response) => {
        setLastWorks(response.data)
        
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {lastWorks.map((works, index) => (
          <View key={index} style={styles.workContainer}>
            <Text style={styles.workTitle}>İş Adı: {works.jobAdvertisement.name}</Text>
            <Text>Şehir Adı: {works.jobAdvertisement.city}</Text>
            <Text>Maaş: {works.jobAdvertisement.salary}</Text>
            <Text>Alan: {works.jobAdvertisement.area}</Text>
            <Text>İşveren Email: {works.jobAdvertisement.admin.email}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 20,
  },
  workContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  workTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
