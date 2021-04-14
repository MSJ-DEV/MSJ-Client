import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignUp from '../scenes/signUp'
import React from 'react'


const screens = {
   
    SignIn: {
        screen: SignUp,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation}/>
                
            }
        }
    },
    
  
  

}
const SingUpStack = createStackNavigator(screens);
export default createAppContainer(SingUpStack);
