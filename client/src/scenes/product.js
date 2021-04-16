import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import axios from "react-native-axios"
import Constants from 'expo-constants';


export default class product extends React.Component {
constructor(props){
  super(props)
  this.state={
    data:[]
  }
}

  componentDidMount(){
    axios.get("http://localhost:3333/api/poducts")
    .then((res)=>{
      this.setState({data:res.data})
    }).catch((err)=>{
      console.log(err)
    })
  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.state.data.map((e)=>{
          return (
            <View key={e.id}>
                   <Card style={styles.container}>
      <Card.Cover source={{ uri:e.image }} />
       <Card.Content>
        <Title>{e.name}</Title>
        <Paragraph>{e.information}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>{e.status}</Button>
        <Button>{e.oldprice}TND</Button>
      </Card.Actions>
    </Card>
            </View>
          
        )})}
   
    </View>
  );

  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    
  
  }
});
