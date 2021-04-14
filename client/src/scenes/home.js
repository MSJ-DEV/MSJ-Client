import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

const home = () => {
    // const pressHandler = ()=> {
    //     navigation.navigate('Product')   }
    return (
    <View>
        <Text>helloooo home page</Text>
        <Text>helloooo home page</Text>
        <Text>helloooo home page</Text>
        <Text>helloooo home page</Text>
        

         <Button title='click me'/>
    </View>
    )
}

export default home

// const home = ({navigation}) => {
//     const pressHandler = ()=> {
//         navigation.navigate('Product')   }
//     return (
//     <View>
//         <Text>helloooo home page</Text>
//         <Text>helloooo home page</Text>
//         <Text>helloooo home page</Text>
//         <Text>helloooo home page</Text>
        

//          <Button title='click me' onPress={pressHandler}/>
//     </View>
//     )
// }