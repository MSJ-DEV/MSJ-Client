import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import FoundUs from '../scenes/foundUs'
import React from 'react'


const screens = {
   
    Home: {
        screen:FoundUs ,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation} title=''/>
                
            }
        }
    },  

}
const FoundUsStack = createStackNavigator(screens);
export default createAppContainer(FoundUsStack);
