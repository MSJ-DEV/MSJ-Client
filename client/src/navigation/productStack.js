import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import Product from '../scenes/product'
import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyList from '../scenes/myList';




const screens = {
   
    Product: {
        screen: Product,
       
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text style={{fontSize:30 , color: '#1d5aa9', padding:20}}> Your Product</Text>),
                headerRight: () => (
                    <TouchableOpacity  onPress={()=>navigation.navigate('MyList')}>
                          <View >
                                 <FontAwesome name ='shopping-cart' size={40} color='#f7b731' style={{padding:40}}/>
                          </View>        
                    </TouchableOpacity>
                   ),
                   MyList: {
                    screen: MyList,
                    navigationOptions: ({navigation})=> {
                        return {
                            headerLeft : () => <Header navigation={navigation} />,
                            headerTitle : ()=> (<Text style={{fontSize:30 , color: '#1d5aa9', padding:20}}> My Liste </Text>),
                            headerRight: () => (
                                <TouchableOpacity  onPress={()=>navigation.navigate('Product')}>
                                      <View >
                                             <FontAwesome name ='shopping-cart' size={40} color='#f7b731' style={{padding:40}}/>
                                      </View>        
                                </TouchableOpacity>
                               ),
                            
                        }
                    
                }
                },
                
            }
        
    }
    },
    
  
  

}
const ProductStack = createStackNavigator(screens);
export default createAppContainer(ProductStack);