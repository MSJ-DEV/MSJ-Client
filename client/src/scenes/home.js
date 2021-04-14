import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

const home = ({navigation}) => {
    const pressHandler = ()=> {
        navigation.navigate('Product')   }
    return (
    <View>
        <Text>helloooo home page</Text>

         <Button title='click me ' onPress={pressHandler}/>
    </View>
    )
}

export default home

