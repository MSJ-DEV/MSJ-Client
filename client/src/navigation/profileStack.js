import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { Text } from 'react-native';

import Profile from '../scenes/profile';
import Header from '../components/header'; 
import React from 'react';
import MyList from '../scenes/myList';
import Update from '../scenes/userInfo';
import Home from '../scenes/home'

const screens = {
   
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Product</Text>)
                
            }
        
    },
    },

   

}
const ProfileStack = createStackNavigator(screens);
export default createAppContainer(ProfileStack);
