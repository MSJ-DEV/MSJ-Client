import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import MyList from '../scenes/myList'
import React from 'react'
import { Text, Button , View} from 'react-native';
import Product from '../scenes/product';
// import Payment from '../scenes/payment';
import PaymentScreen from '../scenes/paymentScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const screens = {
   
    MyList: {
        screen: MyList,
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text> Your Product </Text>),
                headerRight: () => (
                    <TouchableOpacity  onPress={()=>navigation.navigate('MyList')}>
                          <View >
                                 <FontAwesome name ='shopping-cart' size={40} color='#f7b731' style={{padding:40}}/>
                          </View>        
                    </TouchableOpacity>
                   ),
                
                
            }
        
     }
    },
    Product: {
        screen: Product,
       
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Product</Text>),
                headerRight: () => (
                  <TouchableOpacity  onPress={()=>navigation.goBack()}>
                        <View >
                               <FontAwesome name ='shopping-cart' size={40} color='#f7b731' style={{padding:40}}/>
                        </View>        
                  </TouchableOpacity>
                 ),
            }
        
     }
    },
    PaymentScreen: {
        screen: PaymentScreen,
        
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Payment</Text>),
                headerRight: () => (
                    <TouchableOpacity  onPress={()=>navigation.goBack()}>
                          <View >
                                 <FontAwesome name ='shopping-cart' size={40} color='#f7b731' style={{padding:40}}/>
                          </View>        
                    </TouchableOpacity>
                   ),
                
                
            }
        
    }
    },
    
  
  

}
const MyListStack = createStackNavigator(screens);
export default createAppContainer(MyListStack);
