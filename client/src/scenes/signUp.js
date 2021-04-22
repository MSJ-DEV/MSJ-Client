import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import axios from "react-native-axios";
import sanitizeHtml from 'sanitize-html'

const signUp = ({navigation}) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [numberPhone, setNumberPhone] = useState();

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passformat = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    const nameformat = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
     
    
    const register =() =>{
       let forms = {firstName : sanitizeHtml(firstName),
      lastName :sanitizeHtml(lastName),
      email:sanitizeHtml(email),
      password,
      numberPhone

      
      }
      console.log(forms)
      // const validateForm = () => {
      //   // if (firstName.match(nameformat) && lastName.match(nameformat) && email.match(mailformat)&& password.match(passformat)&& numberPhone.length === 8) {
      //   //   return true;
      //   // }else {
      //   //   console.log('cheack your form first ') ;
      //   // }
        
      // }
    
      
      if (JSON.stringify(forms)=== JSON.stringify({firstName, lastName, email, password, numberPhone}) ) {
          axios.post("http://localhost:3333/api/users/create", {firstName, lastName, email, password, numberPhone}).then((res)=> {
        console.log(res)
        navigation.navigate('Profile')

      }).catch((err)=> console.log(err))
      }else {
        alert('dont try tp put some script in the input');
      }
    }



  
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>
        <FormInput
          labelValue={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
          
          placeholderText="firstName"
          iconType="user"
          keyboardType="firstName"
          autoCapitalize="none"
          autoCorrect={false}
        />
           <FormInput
          labelValue={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
          placeholderText="lastName"
          iconType="user"
          keyboardType="lastName"
          autoCapitalize="none"navigation
          autoCapitalize="none"
          autoCorrect={false}
          
        />
        <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        
      />
        <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText ="password"
        iconType="lock"
        secureTextEntry={true}
        />
        <FormInput 
          labelValue={numberPhone}
          onChangeText={(userNumberPhone) => setNumberPhone(userNumberPhone)}
          placeholderText="phone number"
          iconType="phone"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
        />
      {/* {Platform.OS === 'android' ? ( */}
        <FormButton
        buttonTitle="Sign Up"
        onPress={() => register()}
      />
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
          />
        </View>
      {/* ) : null} */}
      
        <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('signIN')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>



        </View>
    )
}

export default signUp


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
  });
  