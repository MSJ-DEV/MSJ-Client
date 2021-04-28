import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../scenes/home';
import Product from '../scenes/product';
import Header from '../components/header'; 
import React from 'react'
import { Text } from 'react-native';


const screens = {
   
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Home</Text>)
               
            }
        
    }
    },
    // Product : {
    //     screen : Product
    // },
  
  

}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
