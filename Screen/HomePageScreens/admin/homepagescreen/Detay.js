import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Detay = ({data}) => {
   const [state, setState] = useState([])
   
    return (
        <ScrollView>
            <View style={styles.container}>
                {data.map((item, index) => (
                    <View key={index} style={styles.employeeContainer}>
                        <Text>İsim: {item.employee.name}</Text>
                        <Text>Şehir: {item.employee.city}</Text>
                        <Text>Email: {item.employee.email}</Text>
                        {/* Diğer özellikler buraya eklenebilir */}
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Detay

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
    }
})
