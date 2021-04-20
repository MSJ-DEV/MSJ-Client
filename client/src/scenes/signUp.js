import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const signUp = ({navigation}) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [numberPhone, setNumberPhone] = useState();


  
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
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="mail"
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
          keyboardType="tel"
          autoCapitalize="none"
          autoCorrect={false}
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
  