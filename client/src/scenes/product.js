import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';


const product = ({navigation}) => {
    const pressHandler =()=> {
        navigation.goBack();
    }
    return (
        <View>
            <Text>hello product</Text>
            <Text>hello product</Text>
            <Text>hello product</Text>
            <Text>hello product</Text>
            <Button title='go back to home page' onPress={pressHandler}/>

        </View>
    )
}

export default product

