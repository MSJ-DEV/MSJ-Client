import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import FormInput from '../components/FormInput'
import { ScrollView } from 'react-native-gesture-handler';


export default function userInfo() {
  const [address1, setAddress1] = useState()
  const [address2, setAddress2] = useState()
  const [zipCode, setZipCode] = useState()
  const [gender, setGender] = useState()
  const [city, setCity] = useState()



    return (
        <View>
            <Text>hello user inforamion </Text>
            <ScrollView>
            <FormInput 
               labelValue={address1}
               onChangeText={(address1) => setAddress1(address1)}
               placeholderText="sett your correct address please"
               iconType="idcard"
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}
            />
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      margin: 2,
    },
    controlContainer: {
      margin: 2,
      padding: 6,
      borderRadius: 4,
      justifyContent: 'center',
      backgroundColor: '#3366FF',
    },
  });