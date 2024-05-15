import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeService";

export default function MyApplications({ dataEmployee }) {
  const [application, setApplication] = useState([]);
  const employeeService = new EmployeeService();
  const employee = dataEmployee;

  useEffect(() => {
    employeeService
      .getApplication(employee.id)
      .then((res) => {
        setApplication(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {application.map((application, index) => (
            <View key={index} style={styles.jobAdvertisement}>
              <Text style={styles.advertisementTitle}>
                İş Adı: {application.jobAdvertisement.name}
              </Text>
              <Text style={styles.detail}>
                İlan Adı: {application.jobAdvertisement.jobName}
              </Text>
              <Text style={styles.detail}>
                İlan Şehri: {application.jobAdvertisement.city}
              </Text>
              <Text style={styles.detail}>
                Maaş : {application.jobAdvertisement.salary} TL
              </Text>
              <Text style={styles.detail}>
                İş Alanı: {application.jobAdvertisement.area}
              </Text>
              {application.active === true ? (
                <Text style={styles.detail}>İş Durumu: Onaylandı</Text>
              ) : (
                <Text style={styles.detail}>İş Durumu: Bekleniyor</Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    width: "80%",
    margin: 25,
  },
  jobAdvertisement: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
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
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  detail: {
    fontSize: 16,
    marginBottom: 3,
    color: "#555",
  },
  btnButon: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
  },
});
