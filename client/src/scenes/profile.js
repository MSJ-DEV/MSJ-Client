import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


import myConfig from "../../configExpo";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import SafeAreaView from "react-native-safe-area-view";
import SocialButton from "../components/SocialButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "react-native-axios";

export default function Profile({ navigation }) {
  const [selectImg, setSelectedImg] = useState(null);
  const [data, setPhoto] = useState("");
  const [firstName, setFirstName] = useState("rmadi");
  const [lastName, setLastName] = useState("eleys");
  const [email, setEmail] = useState("msjcontactdev@gmail.com");
  const [numberPhone, setNumbePhone] = useState(" ");
  const [id, setId] = useState()
  const [photoUrl, setPhotoUrl] = useState(
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
  );
  const [localStorrage, setLocalStrorage] = useState();
  const [storage, setStorage] = useState();
  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    getInformation();
  }, []);
  const getInformation = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("signIn");
   
      jsonValue != null ? JSON.parse(jsonValue) : null;
      let mail = JSON.parse(jsonValue);

      let emailserver = mail.email;

      axios
        .post(`${myConfig}/api/users/oneUserEmail`, {
          email: emailserver,
        })
        .then((res) => {
          setLogIn(true);
          setStorage(res.data);
          let first = storage[0].firstName;
          console.log('*********************** first /******************', first)
          setFirstName(first);
          let last = storage[0].lastName;
          setLastName(last);
          let m = storage[0].email;
          setEmail(m);
          let myid = storage[0].id;
          setId(myid)

          console.log("########################my hooooooks\n", storage);
          console.log("firstName************", firstName, "", lastName, email);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      // error reading value
    }
  };

  let openImage = async () => {
    let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted === false) {
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync();

    if (picker.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: picker.uri });
    console.log(picker);
  };

  return (


//     background-color: #f9ea8f;
// background-image: linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%);

    <SafeAreaView >
      <LinearGradient colors={['#aff1da', '#f9ea8f', '#aff1da']}
    style={styles.conntainer} >
      <ScrollView
       
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {selectImg !== null ? (
          <Image
            style={styles.userImg}
            source={{
              uri: selectImg.localUri !== null ? selectImg.localUri : photoUrl,
            }}
          />
        ) : (
          <Image style={styles.userImg} source={{ uri: photoUrl }} />
        )}
        <TouchableOpacity onPress={openImage} style={styles.button}>
          <Text>Click</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 50, marginBottom: 20, fontSize: 30 }}>
          {" "}
          Welcome Back {firstName}{" "}
        </Text>
        <SocialButton
          buttonTitle={firstName}
          btnType="user"
          color="#1e272e"
          backgroundColor="#e6eaf4"
        />
        <SocialButton
          buttonTitle={("your lastName ", lastName)}
          btnType="user"
          color="#1e272e"
          backgroundColor="#e6eaf4"
        />

        <SocialButton
          buttonTitle={email}
          btnType="user"
          color="#1e272e"
          backgroundColor="#e6eaf4"
        />
        <SocialButton
          buttonTitle={numberPhone}
          btnType="phone"
          color="#1e272e"
          backgroundColor="#e6eaf4"
          
        />
       
          <Button 
        
        title='more info'
            onPress={()=> navigation.navigate('Update', {id})}

        />
      </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#e6eaf4",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

//  to add cloudinary

/* 



import React, { useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import axios from 'react-native-axios'
export default function Photo(props) {
  const [localUri,setSelectedImage]=useState('')
  const [data,setPhoto]=useState('')

  let openImagePickerAsync = async () => {
    // let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    // if (permissionResult.granted === false) {
    //   alert('Permission to access camera roll is required!');
    //   return;
    // }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

    let data = {
      "file": pickerResult.uri,
      "upload_preset": "kgiezron",
    }

    fetch("https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload", {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(async r => {
      let data = await JSON.parse(r)

      setPhoto(data.url);
    }).catch(err => console.log(err))
  };
 
  return (
    <View>
      {console.log(data,'rrrrrr')}
      <Text> Look at our pretty picture! </Text>
      <Button theme={theme} icon="image-area" mode="contained" onPress={() => openImagePickerAsync()}/>
  }
})
*/
