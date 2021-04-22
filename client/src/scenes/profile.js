import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
} from 'react-native';


const Profile = ({navigation} ) => {
// console.log("This is route props", route.params)
console.log("This is navigationa props", navigation)

  const [userData,setUserData] = useState([]);




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
      <Text>
       hello there :!!!!!!! 
      </Text>
          
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