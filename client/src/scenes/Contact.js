import React, { useState } from "react";
<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
=======
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
>>>>>>> b936071d246d3f6d5243a565875a3196f1e1c2e8
import FromInput from "../components/FormInput";
import { Button } from "@ui-kitten/components";
import axios from "react-native-axios";
import TextArea from '../components/TextArea';

const Contact = ({ navigaton }) => {
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  console.log("text", text);
  console.log("email", email);
  const onSendEMail = () => {
    axios
      .post("http://192.168.1.12:3333/sendmail", { email, text })
      .then((res) => {
        navigation.navigate("Home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

<<<<<<< HEAD
  return (
    <View style={styles.conntainer}>
      <FromInput
=======

const Contact = ({navigaton}) => {
    const [email, setEmail] = useState();
    const [text, setText] = useState();

    const onSendEMail = ()=> {
      axios.post('http://192.168.1.15:3333/sendmail',{email, text})
      .then((res)=>{console.log(res)})
      .catch((e)=>{console.log(e)})
      
    }
  const goTohome =()=> {
      navigaton.navigate('HOME')
}

    return (
     

      
        <View style={styles.conntainer}>
          <Image
              source={{uri:'https://gtmix.org/wp-content/uploads/2019/05/contact_us.jpg'}}         
          />

        <FromInput
        style={{ fontSize:25, color:'#000'}}
>>>>>>> b936071d246d3f6d5243a565875a3196f1e1c2e8
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
      />
<<<<<<< HEAD

      <TextInput
        style={styles.input}
        labelValue={text}
        onChangeText={(text) => setText(text)}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
      />
      <Button style={styles.btn} onPress={() => onSendEMail()}>
        Submit
      </Button>
    </View>
  );
};
=======
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
      
        {/* <TextInput
        style={styles.input}
         labelValue={text}
         onChangeText={(text) => setText(text)}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        /> */}
        <Button
         style={styles.btn}
         onPress={()=>onSendEMail()}
        
        >Submit</Button>
  

      </View>
    )
}
>>>>>>> b936071d246d3f6d5243a565875a3196f1e1c2e8

export default Contact;

const styles = StyleSheet.create({
<<<<<<< HEAD
  conntainer: {
    flex: 1,
    backgroundColor: "#808e9b",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  input: {
    width: 440,
    height: 150,
    borderBottomColor: 1,
    borderColor: "black",
    fontSize: 20,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
    width: 150,
    backgroundColor: "#485460",
=======
    conntainer:{
        flex:1,
        backgroundColor:'#808e9b',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        // paddingTop: 50,
    },
    input: {
 
      fontSize:25,
      justifyContent: "flex-start",
      textAlignVertical: 'top',
      color:"#000"
 

>>>>>>> b936071d246d3f6d5243a565875a3196f1e1c2e8
  },
});
