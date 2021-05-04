import React, { useState, useEffect } from "react";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import FromInput from "../components/FormInput";
import axios from "react-native-axios";
<<<<<<< HEAD
import * as GoogleSignIn from "expo-google-sign-in";
import Expo from "expo";
=======
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


import Expo from "expo"



>>>>>>> b936071d246d3f6d5243a565875a3196f1e1c2e8

import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const signIn = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
<<<<<<< HEAD

  // const signInAsync = async () => {
  //   initAsync = async () => {
  //     await GoogleSignIn.initAsync({
  //       // You may ommit the clientId when the firebase `googleServicesFile` is configured
  //       clientId: '213513789380-4g4i28f9lrf6soppvpqrri94tqoc9n8t.apps.googleusercontent.com',
  //     });
  //     this._syncUserWithStateAsync();
  //   };
  //   try {
  //     await GoogleSignIn.askForPlayServicesAsync();
  //     const { type, user } = await GoogleSignIn.signInAsync();
  //     if (type === 'success') {
  //       this._syncUserWithStateAsync();
  //     }
  //   } catch ({ message }) {
  //     alert('login: Error:' + message);
  //   }
  // };

  const singIn = () => {
=======
  const clientAndroid = '213513789380-4g4i28f9lrf6soppvpqrri94tqoc9n8t.apps.googleusercontent.com';
  const ClientIos = '213513789380-vq6hj0529hpbte0k5epr1c72gapq4np2.apps.googleusercontent.com'
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)

      await AsyncStorage.setItem('signIn', jsonValue)
      console.log('store in my function ', jsonValue)
    } catch (e) {
      
      console.log(e)
    }
  }
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId:ClientIos ,
        androidClientId: clientAndroid,
      });
      console.log('************ from gooooooogle', user)
      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        storeData({user})
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };
  

  const singInx = () => {
>>>>>>> b936071d246d3f6d5243a565875a3196f1e1c2e8
    axios
      .post("http://192.168.1.12:3333/api/auth/login", { email, password })
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
<<<<<<< HEAD
            onPress={() => onLoginPress()}
=======
            onPress={()=> signInAsync()}
>>>>>>> b936071d246d3f6d5243a565875a3196f1e1c2e8
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
