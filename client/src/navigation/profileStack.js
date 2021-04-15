import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Profile from '../scenes/profile';
import Header from '../components/header'; 
import React from 'react'


const screens = {
   
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation} title=''/>
                
            }
        }
    },
    // Product : {
    //     screen : Product
    // },
  
  

}
const ProfileStack = createStackNavigator(screens);
export default createAppContainer(ProfileStack);
