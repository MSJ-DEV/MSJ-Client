import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignUp from '../scenes/signUp';
import SingIn from '../scenes/signIn';
import React from 'react'
import { Text} from 'react-native';
import Profile from '../scenes/profile'
import Update from '../scenes/userInfo';




const screens = {
   
    SignUp: {
        screen: SignUp,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Sign Up</Text>)
                
            }
        }
    } ,
    SingIn: {
        screen:SingIn,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft: () => (
                    <Header navigation={navigation}  />
                  ),
                headerTitle : () => (<Text>Profile</Text>)
                
            }
        }
    },
    Update : {
        screen : Update,
        navigationOptions:({navigation})=> {
            return {
                headerLeft :()=> <Header navigation={navigation} />,
                headerTitle : () =>(<Text>More Inforamion</Text>)
            }
        }
    },
  
 
    
    
}
const SingUpStack = createStackNavigator(screens);
export default createAppContainer(SingUpStack);
