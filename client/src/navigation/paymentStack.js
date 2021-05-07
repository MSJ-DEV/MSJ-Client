import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../scenes/home';
import Product from '../scenes/product';
import Header from '../components/header'; 
import React from 'react'
import { Text } from 'react-native';
import Payment from '../scenes/paymentScreen'


const screens = {
    Payment: {
        screen: Payment,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>PAYMENT</Text>)
               
            }
        
    }
    }, 
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Home</Text>)
               
            }
        
    }
    },
   
  
  

}
const PaymentStack = createStackNavigator(screens);
export default createAppContainer(PaymentStack);
