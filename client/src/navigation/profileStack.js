import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Profile from '../scenes/profile';
import Header from '../components/header'; 
import React from 'react';
import MyList from '../scenes/myList'
import { Text } from 'react-native';


const screens = {
   
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Product</Text>)
                
            }
        
    } ,  MyList: {
        screen: MyList,
       
            navigationOptions: ({navigation})=> {
                return {
                    headerLeft : () => <Header navigation={navigation} />,
                    headerTitle : ()=> (<Text>My list</Text>)
                    
                }
            
        }
    },
    },
   

}
const ProfileStack = createStackNavigator(screens);
export default createAppContainer(ProfileStack);
