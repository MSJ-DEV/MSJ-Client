
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';
import SocialButton from '../components/SocialButton';





export default function Profile({navigation}) {
  const [selectImg, setSelectedImg] = useState(null);
  const [data,setPhoto]=useState('')

  let openImage = async () =>{
    let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();


    if(permission.granted === false){
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync()

    if(picker.cancelled ===true){
      return;
    }
    setSelectedImg({localUri:picker.uri})
    console.log(picker)
  }

  return (

  <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
      {
          selectImg !== null ?  (
           <Image 
             style={styles.userImg} 
              source={{uri:(selectImg.localUri !== null) ? selectImg.localUri : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'}} />
         ) : <Text>Failed to load the image </Text>
       }
            <TouchableOpacity 
                onPress={openImage}
              style={styles.button}>
              <Text>Click</Text>
             </TouchableOpacity>

        <Text style={{marginTop:50, marginBottom:20, fontSize:30}}> Welcome Back </Text>
       <SocialButton
            buttonTitle= { navigation.state.params.res.data.user.firstName}
            btnType="user"
            color="#1e272e"
            backgroundColor="#e6eaf4"
          />
           <SocialButton
            buttonTitle= {"your lastName ", navigation.state.params.res.data.user.lastName} 
            btnType="user"
            color="#1e272e"
            backgroundColor="#e6eaf4"
          />
          <SocialButton
            buttonTitle= { navigation.state.params.res.data.user.email}
            btnType="user"
            color="#1e272e"
            backgroundColor="#e6eaf4"
          />
          <SocialButton
            buttonTitle= { navigation.state.params.res.data.user.numberPhone}
            btnType="phone"
            color="#1e272e"
            backgroundColor="#e6eaf4"
          />
          
      </ScrollView>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  button:{
    borderRadius:10,
    backgroundColor:'#333',
    justifyContent:'center',
    alignItems:'center',
    padding:10
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
      <Image style={styles.img} source={{uri:data}}/>

</View>
  );
}
const theme = {colors:{primary:"#CA9D0C"}};
const styles = StyleSheet.create({
  img:{
    width:30,
    height:20
  }
})
*/