import React, { useState } from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FromInput from "../components/FormInput";
import { Button } from "@ui-kitten/components";
import axios from "react-native-axios";
import TextArea from "../components/TextArea";
import myConfig from "../../configExpo";

import { LinearGradient } from 'expo-linear-gradient';




const Contact = ({ navigaton }) => {
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [subjectTosend, setSubject] = useState();

  const onSendEMail = () => {
    axios
      .post(`${myConfig}:3333/api/sendmail`, {
        email,
        text,
        subjectTosend,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const goTohome = () => {
    navigaton.navigate("HOME");
  };

  return (

    // background-color: #f5d020;background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);

    <LinearGradient
    // Button Linear Gradient
    colors={['#aff1da', '#f9ea8f', '#aff1da']}
    style={styles.conntainer}>
    
 


     
      <Image
        source={{
          uri: "https://gtmix.org/wp-content/uploads/2019/05/contact_us.jpg",
        }}
      />

      <FromInput
        style={{ fontSize: 25, color: "#000", }}
        labelValue={email}
        onChangeText={(email) => setEmail(email)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        
      />
      <FromInput
        style={{ fontSize: 25, color: "#000" }}
        labelValue={subjectTosend}
        onChangeText={(subjectTosend) => setSubject(subjectTosend)}
        placeholderText="Subject"
        iconType="filetext1"
        autoCapitalize="none"
      />
      <TextArea
        style={styles.input}
        labelValue={text}
        onChangeText={(text) => setText(text)}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
      />

      <Button style={styles.btn}  onPress={() => onSendEMail()}>
        Submit
      </Button>
  
    </LinearGradient>
  );
};

export default Contact;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: "#f39c12",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // paddingTop: 50,
  },
  input: {
    fontSize: 25,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    color: "#000",
  },
  btn: {
    marginTop: 20,
    width: 150,
    borderRadius:30,
    backgroundColor:'#74b9ff'
    
  },
});
