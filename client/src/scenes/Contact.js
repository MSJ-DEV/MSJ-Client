import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FromInput from "../components/FormInput";
import { Button } from "@ui-kitten/components";
import axios from "react-native-axios";
import TextArea from "../components/TextArea";

const Contact = ({ navigaton }) => {
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  console.log("text", text);
  console.log("email", email);
  const onSendEMail = () => {
    axios
      .post("http://192.168.1.12:3333/api/sendmail", { email, text })
      .then((res) => {
        navigation.navigate("Home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View style={styles.conntainer}>
      <FromInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
      />

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

export default Contact;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: "#808e9b",
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
});
