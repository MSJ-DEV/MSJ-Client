import React, {useState, useEffect} from 'react';
import { Chip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';


import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
 
  View,
} from 'react-native';
import SocialButton from '../components/SocialButton';


const Profile = ({navigation} ) => {


// console.log("This is route props", route.params)
console.log("This is navigationa props", navigation.state.params.res.data.user)
const {profile} = navigation.state.params.res.data.user
console.log("3333333333333333",navigation.state.params.res.data)



  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
       
        <Image
          style={styles.userImg}
            source ={{uri:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"}}
        />
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
};

export default Profile;

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
 
});