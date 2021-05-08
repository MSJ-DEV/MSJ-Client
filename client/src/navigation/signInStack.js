import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import SignIn from '../scenes/signIn'
import React from 'react';
import signUp from '../scenes/signUp';
import Profile from '../scenes/profile';
import { Text} from 'react-native';
import Update from '../scenes/userInfo';
import Home from '../scenes/home'





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
    Update : {
        screen : Update,
        navigationOptions:({navigation})=> {
            return {
                headerLeft :()=> <Header navigation={navigation} />,
                headerTitle : () =>(<Text>More Inforamion</Text>)
            }
        }
    },
    Home : {
        screen : Home,
        navigationOptions:({navigation})=> {
            return {
                headerLeft :()=> <Header navigation={navigation} />,
                headerTitle : () =>(<Text>More Inforamion</Text>)
            }
        }
    },

  
  

}
const SingInStack = createStackNavigator(screens);
export default createAppContainer(SingInStack);
