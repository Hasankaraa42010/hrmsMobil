import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AdminService from '../Service/AdminService';

export default function ApplicationDetails({ route }) {
  const { data } = route.params;
  const adminService = new AdminService();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    adminService.getAppFromJobId(data).then((res) => {
      console.log(res.data);
      setEmployees(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [data]);

  const handleAccept = (id) => {
    console.log(`Accepted: ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Rejected: ${id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Başvuranlar Listesi</Text>
        </View>
        <View>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <View key={index} style={styles.employeeCard}>
                <Text style={styles.employeeText}><Text style={styles.label}>Alan:</Text> {employee.employee.area}</Text>
                <Text style={styles.employeeText}><Text style={styles.label}>Şehir:</Text> {employee.employee.city}</Text>
                <Text style={styles.employeeText}><Text style={styles.label}>E-posta:</Text> {employee.employee.email}</Text>
                <Text style={styles.employeeText}><Text style={styles.label}>Tecrübe:</Text> {employee.employee.experience} yıl</Text>
                <Text style={styles.employeeText}><Text style={styles.label}>Meslek:</Text> {employee.employee.job}</Text>
                <Text style={styles.employeeText}><Text style={styles.label}>Ad:</Text> {employee.employee.name}</Text>
                <Text style={styles.employeeText}><Text style={styles.label}>Telefon:</Text> {employee.employee.phoneNumber}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.acceptButton} onPress={() => handleAccept(employee.employee.id)}>
                    <Text style={styles.buttonText}>Kabul</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rejectButton} onPress={() => handleReject(employee.employee.id)}>
                    <Text style={styles.buttonText}>Red</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noEmployeesText}>Başvuran bulunamadı</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    top:20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  headerText: {
    top:10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  employeeCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  employeeText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  acceptButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  rejectButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noEmployeesText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999',
  },
});
