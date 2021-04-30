import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import FromInput from "../components/FormInput";

const Contact = () => {
    const [email, setEmail] = useState();
    const [text, setText] = useState();

    return (
        <View style={styles.conntainer}>

        <FromInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      
        <TextInput
         labelValue={text}

         onChangeText={(text) => setEmail(text)}

          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    conntainer:{
        flex:1,
        backgroundColor:'#333',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 50,
    },
    textAreaContainer: {
      borderColor: '#333',
      borderWidth: 1,
      padding: 5,
      backgroundColor:'#000',

      marginTop:100
    },
    textArea: {
      height: 150,
      justifyContent: "flex-start",
      textAlignVertical: 'top'
    }
  })