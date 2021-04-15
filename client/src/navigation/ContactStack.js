import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import Contact from '../scenes/Contact'
import React from 'react'


const screens = {
   
    Home: {
        screen:Contact ,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation} title=''/>
                
            }
        }
    },  

}
const FoundUsStack = createStackNavigator(screens);
export default createAppContainer(FoundUsStack);
