import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import FormInput from "../components/FormInput";
import { ScrollView } from "react-native-gesture-handler";
import { BackgroundImage } from "react-native-elements/dist/config";
import { windowHeight, windowWidth } from "../utils/Dimentions";
import { LinearGradient } from "expo-linear-gradient";
import axios from "react-native-axios";
import myConfig from "../../configExpo";

export default function userInfo({ route, navigation }) {
  const [firstNameU, setFirstNameU] = useState();
  const [lastNameU, setLastNameU] = useState();
  const [numberPhoneU, setNumberPhoneU] = useState();
  const [addresse1U, setAddresse1U] = useState();
  const [addresse2U, setAddresse2U] = useState();
  const [zipCodeU, setZipCodeU] = useState();
  const [cityU, setCityU] = useState();
  const [genderU, setGenderU] = useState();
  const [emailU, setEmailU] = useState();

  const [firstName, setFirstName] = useState("first name");
  const [lastName, setLastName] = useState("last name");
  const [phoneNumber, setPhoneNumber] = useState();
  const [adresse1, setAdresse1] = useState("addresse 1");
  const [address2, setAdresse2] = useState("addrese 2");
  const [zipCode, setZipCode] = useState("zip code");
  const [city, setCity] = useState("city");
  const [gender, setGender] = useState("male or female?");
  const id = navigation.state.params.userInfo.id
  const email = navigation.state.params.userInfo.email;
  setTimeout(() => {
    // firstName
    if (navigation.state.params.userInfo.firstName) {
      setFirstName(navigation.state.params.userInfo.firstName);
    }
    // lastName
    if (navigation.state.params.userInfo.lastName) {
      setLastName(navigation.state.params.userInfo.lastName);
    }
    phoneNumber;
    if (navigation.state.params.userInfo.numberPhone) {
      const stringify = navigation.state.params.userInfo.numberPhone.toString();
      setPhoneNumber(stringify);
    }
    // adresse 1
    if (navigation.state.params.userInfo.adresse1) {
      setAdresse1(navigation.state.params.userInfo.adresse1);
    }
    // adresse 2
    if (navigation.state.params.userInfo.address2) {
      setAdresse2(navigation.state.params.userInfo.address2);
    }
    // city
    if (navigation.state.params.userInfo.city) {
      setCity(navigation.state.params.userInfo.city);
    }
    // zip code
    if (navigation.state.params.userInfo.zipCode) {
      setZipCode(navigation.state.params.userInfo.zipCode);
    }
    // gender
    if (navigation.state.params.userInfo.gender) {
      setGender(navigation.state.params.userInfo.gender);
    }
  }, 1000);
  const updateForm = () => {
    const firstName = firstNameU;
    const lastName = lastNameU;
    const numberPhone = numberPhoneU;
    const adresse1 = addresse1U;
    const adresse2 = addresse2U;
    const zipCode = zipCodeU;
    const city = cityU;
    const gender = genderU;
    const email = emailU;
    axios
      .put(`${myConfig}/api/users/update/${id}`, {
        firstName,
        lastName,
        numberPhone,
        adresse1,
        adresse2,
        zipCode,
        city,
        gender,
        email,
      })
      .then((res) => {
        console.log("response axios", res);
        setTimeout(() => {
          navigation.navigate("Profile");
        }, 1500);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const image = {
    uri: "https://www.carrefourtunisie.com/assets/img/fb-logos-share-v4.png",
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={["#aff1da", "#f9ea8f", "#aff1da"]}
        style={styles.container}
      >
        <Text style={styles.text}>
          please put your correct information for delevery{" "}
        </Text>
        <ScrollView>
          <FormInput
            onChangeText={(firstName) => setFirstNameU(firstName)}
            placeholderText={firstName}
            iconType="user"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            onChangeText={(lastName) => setLastNameU(lastName)}
            placeholderText={lastName}
            iconType="user"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            onChangeText={(numberPhone) => setNumberPhoneU(numberPhone)}
            placeholderText={phoneNumber? phoneNumber: "pu your phone number please "}
            iconType="phone"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
          />
          <FormInput
            labelValue={email}
            iconType="idcard"
            autoCapitalize="none"
            autoCorrect={false}
            editable={false}
            selectTextOnFocus={false}
            color="red"
          />

          <FormInput
            onChangeText={(gender) => setGenderU(gender)}
            placeholderText={gender}
            iconType="idcard"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            onChangeText={(address1) => setAddresse1U(address1)}
            placeholderText={adresse1}
            iconType="flag"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            onChangeText={(address2) => setAddresse2U(address2)}
            placeholderText={address2}
            iconType="flag"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            onChangeText={(city) => setCityU(city)}
            placeholderText={city}
            iconType="flag"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            onChangeText={(zipCode) => setZipCodeU(zipCode)}
            placeholderText={zipCode}
            iconType="idcard"
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            style={{ color: "#000", padding: 10 }}
          />

          <Button
            style={{
              width: windowWidth / 2,
              height: windowHeight / 15,
              justifyContent: "center",
              alignSelf: "center",
            }}
            onPress={() => updateForm()}
          >
            submit
          </Button>
        </ScrollView>
      </LinearGradient>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e67e22",
  },

  text: {
    margin: 20,
    padding: 20,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#0984e3",
  },
});