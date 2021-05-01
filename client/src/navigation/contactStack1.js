import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import Contact from '../scenes/Contact'
import React from 'react';
import HOME from '../scenes/home';
import { Text} from 'react-native';



const screens = {
   
    Contact: {
        screen: Contact,
       
            navigationOptions: ({navigation})=> {
                return {
                    headerLeft : () => <Header navigation={navigation} />,
                    headerTitle : ()=> (<Text>Contact</Text>)
                    
                }
            
        }
    },
    HOME: {
        screen:HOME,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft: () => (
                    <Header navigation={navigation}  />
                  ),
                headerTitle : () => (<Text>HOME</Text>)
                
            }
        }
    },    
  
}
const ContactStack1 = createStackNavigator(screens);
export default createAppContainer(ContactStack1);
