import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignIn from '../scenes/signIn'
import React from 'react';
import signUp from '../scenes/signUp';
import Profile from '../scenes/profile';
import { Text} from 'react-native';



const screens = {
   
    SignIn: {
        screen: SignIn,
       
            navigationOptions: ({navigation})=> {
                return {
                    headerLeft : () => <Header navigation={navigation} />,
                    headerTitle : ()=> (<Text>Sign In</Text>)
                    
                }
            
        }
    },
    Profile: {
        screen:Profile,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft: () => (
                    <Header navigation={navigation}  />
                  ),
                headerTitle : () => (<Text>Profile</Text>)
                
            }
        }
    },    
    
    signUp: {
        screen: signUp,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Sign Up</Text>)
                
            }
        }
    },
  
  

}
const SingInStack = createStackNavigator(screens);
export default createAppContainer(SingInStack);
