import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignUp from '../scenes/signUp';
import signIN from '../scenes/signIn';
import React from 'react'


const screens = {
   
    SignUp: {
        screen: SignUp,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation} title='Sign up'/>
                
            }
        }
    },
    signIN: {
        screen:signIN,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation} title='Sign In'/>
                
            }
        }
    },
    
    
  
  

}
const SingUpStack = createStackNavigator(screens);
export default createAppContainer(SingUpStack);
