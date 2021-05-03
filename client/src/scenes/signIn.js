import React, { useState, useEffect } from "react";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import FromInput from "../components/FormInput";
import axios from "react-native-axios";
import * as Google from "expo-google-app-auth";

import Expo from "expo"




import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const signIn = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const clientAndroid = '213513789380-4g4i28f9lrf6soppvpqrri94tqoc9n8t.apps.googleusercontent.com';
  const ClientIos = '213513789380-vq6hj0529hpbte0k5epr1c72gapq4np2.apps.googleusercontent.com'
  
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId:ClientIos ,
        androidClientId: clientAndroid,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };
  

  const singInx = () => {
    axios
      .post("http://192.168.1.15:3333/api/auth/login", { email, password })
      .then((res) => {
        console.log("***********************", res.data.user);

        if (res.data === "password matched") {
        }

        if (res.data === "Invalid email") {
          alert("wrong passwrod or email ");
        } else if (res.data === "wrong password") {
          alert("wrong passwrod or email ");
        } else {
          navigation.navigate("Profile", { res });
        }
      });
  };
  

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/logo.jpeg")} style={styles.logo} />

      <FromInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FromInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Sign In" onPress={(e) => singInx()} />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      {Platform.OS === "android" ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={()=> signInAsync()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato-Regular",
  },
});


// 213513789380-4g4i28f9lrf6soppvpqrri94tqoc9n8t.apps.googleusercontent.com

// ios
// 213513789380-vq6hj0529hpbte0k5epr1c72gapq4np2.apps.googleusercontent.com