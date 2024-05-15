import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmployeeService from '../../services/EmployeeService'

export default function JobAdvertisement({dataEmployee}) {
  const [advertisements, setAdvertisements] = useState([])
  const employeeService=new EmployeeService();
  const employee=dataEmployee;
  

  useEffect(() => {
 
  employeeService.getJobs().then((res)=>{
    
    
    setAdvertisements(res.data)
  }).catch((err)=>{
    console.log(err.message);
    
  })
  }, [])
  const handleApply=(employeeId,advertId)=>{
    employeeService.addAply(employeeId,advertId).then((res)=>{
      if(res.success===true){
        Alert.alert("Başvuru onaylandı",res.message)
      }
      else{
        Alert.alert("Başvuru reddeildi",res.message)

      }
    }).catch((err)=>{
     Alert.alert("Sunucu hatası",err.message)
    })
  }
  return ( 
    <ScrollView>
    <View style={styles.container}>
     
      <View>
        {advertisements.map((advertisement, index) => (
          <View key={index} style={styles.jobAdvertisement}>
            <Text style={styles.advertisementTitle}>İş Adı: {advertisement.name}</Text>
            <Text style={styles.detail}>İlan Adı: {advertisement.jobName}</Text>
            <Text style={styles.detail}>İlan Şehri: {advertisement.city}</Text>
            <Text style={styles.detail}>Maaş : {advertisement.salary} TL</Text>
            <Text style={styles.detail}>İş Alanı: {advertisement.area}</Text>

            <TouchableOpacity  style={styles.btnButon} onPress={() => handleApply(employee.id, advertisement.id)}>
            <Text 
              style={{
                color: "#ffff",
                fontSize: 20,
                textAlign: "center",
              }}
            >
             Başvur
            </Text>
          </TouchableOpacity>
          </View>
        ))}
      </View>
      
    </View></ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: '80%',
    margin:25,
    
  },
  jobAdvertisement:{
    backgroundColor:"#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
   paddingLeft:25,
   marginLeft:25,
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
  btnButon:{
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  }
});