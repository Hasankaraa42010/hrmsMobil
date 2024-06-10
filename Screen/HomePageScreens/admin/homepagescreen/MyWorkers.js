import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AdminService from "../Service/AdminService";

export default function MyWorkers({ dataAdmin }) {
  const adminId = dataAdmin.id;
  const [MyWorkers, setMyWorkers] = useState([]);
  const adminService = new AdminService();
  useEffect(() => {
    adminService
      .getWorkers(adminId)
      .then((response) => {
        console.log(response.data);
        setMyWorkers(response.data);
      })
      .catch((result) => {
        console.log(result);
      });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {MyWorkers.map((item, index) => (
          <View key={index} style={styles.employeeContainer}>
            <Text style={styles.name}>{item.employee.name}</Text>
            <Text style={styles.info}>{item.employee.phoneNumber}</Text>
            <Text style={styles.info}>{item.employee.city}</Text>
            <Text style={styles.info}>{item.employee.job}</Text>
            <Text style={styles.info}>{item.employee.experience}</Text>
            <Text style={styles.info}>{item.employee.area}</Text>
            <Text style={styles.info}>{item.employee.email}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e9ecef',
  },
  employeeContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007bff',
  },
  info: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#17a2b8',
    marginBottom: 4,
  },
  city: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 4,
  },
  job: {
    fontSize: 16,
    color: '#ffc107',
    marginBottom: 4,
  },
  experience: {
    fontSize: 16,
    color: '#fd7e14',
    marginBottom: 4,
  },
  area: {
    fontSize: 16,
    color: '#dc3545',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#6f42c1',
    marginBottom: 4,
  },
});
