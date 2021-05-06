import React, { useState, useRef, useEffect } from "react";
import axios from "react-native-axios";
import {
  StyleSheet,
  View,
  Text

} from "react-native";
import { Button, Icon, Layout, Spinner } from '@ui-kitten/components';



const home = () => {

  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );
  
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size='small'/>
    </View>
  );
  
 


  return (
    <View style={{ flex: 1, backgroundColor: "#1d5aa9", marginRight: 20 }}>
     
      <Text>hello Home Page</Text>

      <Button status='success' style={styles.button}>
      SUCCESS
         </Button>

         {/* accessoryLeft={LoadingIndicator} */}
    <Button style={styles.load} appearance='outline' accessoryLeft={LoadingIndicator}>
      ..LOADING
    </Button>


    </View>
  );
};

export default home;
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    margin: 20,
    // width:100,
    // height:100
  },
  load: {
    margin:30,
    backgroundColor:'#3c40c6'
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
