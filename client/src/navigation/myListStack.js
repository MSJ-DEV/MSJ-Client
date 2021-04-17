import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import MyList from '../scenes/myList'
import React from 'react'


const screens = {
   
    MyList: {
        screen: MyList,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation}/>
                
            }
        }
    },
    
  
  

}
const MyListStack = createStackNavigator(screens);
export default createAppContainer(MyListStack);
