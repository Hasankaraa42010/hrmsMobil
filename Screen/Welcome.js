import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const { height } = Dimensions.get("window");

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{ height: height / 2,  marginTop:20}}
          resizeMode="contain"
          source={require("../assets/image05.png")}
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "#1F41BB",
              textAlign: "center",
            }}
          >
           Hayal Ettiğin işe sokalım
          </Text>
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Mevcut tüm iş rollerini veya ilginizi temel alarak keşfedin ve ana
            dalınızı inceleyin
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 60,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
          onPress={() => navigation.navigate("Giriş Sayfası")}
            
            style={styles.login}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() =>  navigation.navigate('Kaydolma Ekranı')}
            style={styles.register}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                textAlign: "center",
                
              }}
            >
              Kaydol
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  login: {
    backgroundColor: "#1F41BB",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "48%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  register: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "48%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
