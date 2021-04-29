import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import MyList from '../scenes/myList'
import React from 'react'
import { Text, Button } from 'react-native';
import Product from '../scenes/product';
import Payment from '../scenes/payment'

const screens = {
   
    MyList: {
        screen: MyList,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Product</Text>)
                
                
            }
        
    }
    },
    Product: {
        screen: Product,
       
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Product</Text>),
                headerRight:()=>( <Button title='button'
                color="#841584"

                />)
            }
        
    }
    },
    Payment: {
        screen: Payment,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Payment</Text>),
                headerRight: () => (
                     <Button
                      title="Info"
                      color="#000"
                      onPress={()=>goBack()}
                      
                    />
                  ),
                
                
            }
        
    }
    },
    
  
  

}
const MyListStack = createStackNavigator(screens);
export default createAppContainer(MyListStack);
