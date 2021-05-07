import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import FormInput from '../components/FormInput'
import { ScrollView } from 'react-native-gesture-handler';
import { BackgroundImage } from 'react-native-elements/dist/config';
import {windowHeight, windowWidth} from '../utils/Dimentions';



export default function userInfo() {
  const [address1, setAddress1] = useState()
  const [address2, setAddress2] = useState()
  const [zipCode, setZipCode] = useState()
  const [gender, setGender] = useState()
  const [city, setCity] = useState()



const image = {uri: 'https://www.carrefourtunisie.com/assets/img/fb-logos-share-v4.png'}

    return (
        <View style={styles.container}>
        
            <Text style={styles.text}>please put your correct information for youe delevery </Text>
            <ScrollView>
              
            <FormInput 
               labelValue={address1}
               onChangeText={(address1) => setAddress1(address1)}
               placeholderText="sett your correct address please"
               iconType="idcard"
               autoCapitalize="none"
               autoCorrect={false}
            />
              
                     <FormInput 
               labelValue={address2}
               onChangeText={(address1) => setAddress2(address2)}
               placeholderText="sett your correct address please"
               iconType="idcard"
               autoCapitalize="none"
               autoCorrect={false}
            />
                <FormInput 
               labelValue={city}
               onChangeText={(city) => setCity(city)}
               placeholderText="Set Your City "
               iconType="idcard"
               autoCapitalize="none"
               autoCorrect={false}
            />
         

              <FormInput 
               labelValue={gender}
               onChangeText={(gender) => setGender(gender)}
               placeholderText="sett your correct address please"
               iconType="idcard"
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}
            />

                <FormInput 
               labelValue={zipCode}
               onChangeText={(zipCode) => setZipCode(zipCode)}
               placeholderText="Set Your Zip Code "
               iconType="idcard"
               keyboardType="numeric"
               autoCapitalize="none"
               autoCorrect={false}
               style={{color:'#000'}}
            />






          </ScrollView>
          </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e67e22'
  
  },
 
  text: {
    margin:20,
    padding:20,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#0984e3"
  }
});