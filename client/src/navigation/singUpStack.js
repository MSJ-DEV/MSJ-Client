import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignUp from '../scenes/signUp';
import signIN from '../scenes/signIn';
import React from 'react'
import { Text} from 'react-native'



const screens = {
   
    SignUp: {
        screen: SignUp,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Sign Up</Text>)
                
            }
        }
    },
    signIN: {
        screen:signIN,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft: () => (
                    <Header navigation={navigation}  />
                  ),
                headerTitle : () => (<Text>Sign In</Text>)
                
            }
        }
    },
    
    
  
  

}
const SingUpStack = createStackNavigator(screens);
export default createAppContainer(SingUpStack);
