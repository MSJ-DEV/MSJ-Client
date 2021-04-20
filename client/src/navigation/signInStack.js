import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignIn from '../scenes/signIn'
import React from 'react';
import signUp from '../scenes/signUp'


const screens = {
   
    SignIn: {
        screen: SignIn,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation} title='Sign in'/>
                
            }
        }
    },
    signUp: {
        screen: signUp,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation} title='Sign iup'/>
                
            }
        }
    },
  
  

}
const SingInStack = createStackNavigator(screens);
export default createAppContainer(SingInStack);
