import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FromInput from "../components/FormInput";
import { Button } from "@ui-kitten/components";
import axios from "react-native-axios";
import TextArea from "../components/TextArea";
import myConfig from "../../configExpo";

import { Input, Layout } from "@ui-kitten/components";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const Contact = ({ navigaton }) => {
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [subjectTosend, setSubject] = useState();

  const onSendEMail = () => {
    console.log(email, text, subjectTosend);
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
    <React.Fragment>
      <View style={styles.conntainer}>
        <Image
          source={{
            uri: "https://gtmix.org/wp-content/uploads/2019/05/contact_us.jpg",
          }}
        />

        <Layout style={styles.rowContainer} level="1">
          <Input
            style={styles.input}
            status="warning"
            placeholder="e-mail"
            // {...warningInputState}
            labelValue={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            style={styles.input}
            status="danger"
            placeholder="Subject"
            // {...dangerInputState}
            labelValue={subjectTosend}
            onChangeText={(subjectTosend) => setSubject(subjectTosend)}
            iconType="filetext1"
            autoCapitalize="none"
          />
        </Layout>
        <Layout style={styles.rowContainer} level="1">
          <Input
            style={styles.input}
            status="success"
            placeholder="type here"
            labelValue={text}
            onChangeText={(text) => setText(text)}
            numberOfLines={10}
            multiline={true}
          />
        </Layout>

        <Button style={styles.btn} onPress={() => onSendEMail()}>
          Submit
        </Button>
      </View>
    </React.Fragment>
  );
};

export default Contact;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: "#1d5aa9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    // paddingTop: 50,
  },
  input: {
    fontSize: 25,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    color: "#000",
    borderRadius: 10,
    height: 500,
    width: 500,
  },
  btn: {
    marginTop: 20,
    width: 150,
    backgroundColor: "#485460",
  },
  input: {
    flex: 1,
    margin: 2,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: "#3366FF",
    borderRadius: 10,
  },
});
