import React, { PureComponent } from 'react';
import axios from "react-native-axios"
import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList,Button } from 'react-native'

class product extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
    this.getData=this.getData.bind(this)
    this.delete=this.delete.bind(this)
  }

   componentDidMount(){
    this.getData()
  }
  getData(){
 axios.get("http://192.168.22.213:3333/api/poducts")
    .then((res)=>{
      this.setState({data:res.data})
    }).catch((err)=>{
      console.log(err)
    })

  }
  delete(id){
    axios.delete("http://192.168.22.213:3333/api/poducts/"+id)
    .then((res)=>{
      this.getData()
    })
  }
  render() {

    return (
        <View >      
            <FlatList 
          
            data={this.state.data}
            renderItem={({item,index}) => { 
    return(
      <View   style={styles.container}>
        <TouchableOpacity style={styles.card} key={item.id}>
          <Image style={styles.cardImage} source={{uri:item.image}}/>
        <Text style={styles.cardText}>{item.name}</Text>
        <Text style={styles.cardText}>{item.oldprice}</Text>
        <Text>{item.information}</Text>
        <Button title="press me" color="black" onPress={()=>this.delete(item.id)}/>
        </TouchableOpacity>

        </View>
        ) }}
        />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex:1 ,
      alignItems:"center",
      justifyContent:"center",
    },
    cardText:{
      fontSize:30
    },
    card:{
      backgroundColor:'#fff',
      marginBottom:10,
      width:'80%',
      shadowColor:'#000',
      shadowOpacity:1,
      shadowOffset:{
        width:3,
        height:3
      }
    },
    cardImage:{
          width:'100%',
          height:100,
          resizeMode:'cover'
     }
  });

export default product;