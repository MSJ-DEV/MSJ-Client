import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignIn from '../scenes/signIn'
import React from 'react'


const screens = {
   
    SignIn: {
        screen: SignIn,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation}/>
                
            }
        }
    },
    
  
  

}
const SingInStack = createStackNavigator(screens);
export default createAppContainer(SingInStack);
