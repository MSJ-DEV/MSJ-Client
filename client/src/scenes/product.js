import React, { PureComponent } from 'react';
import axios from "react-native-axios"
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList,Button } from 'react-native'
import Cart from './myList'
class product extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      data:[],
      array:[],
      togle:true
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
 handleClick(item){
   var x=Object.values(item)
         console.log(x[0],'ttttttttttttttttt ')
         this.state.array.map((e)=>{
           if(e.id!==Object.values(item)){
           console.log(true,'hhhsssssssssssssss') 
           }else{
             console.log(false,'hhhhhhhhhhh')
           }
           
         })
    this.setState((previose)=>({array:previose.array.concat([item])}),(()=>{
         if(!localStorage.getItem("list")){
          localStorage.setItem("list",JSON.stringify(this.state.array))
         }
           this.state.array.forEach((stateElement)=>{
              JSON.parse(localStorage.getItem("list")).forEach((storageElement, index)=>{
                if(stateElement.id == storageElement.id){
                  let temp=JSON.parse(localStorage.getItem("list"));
                  temp[index]["quantity"]=Number(temp[index]["quantity"])+Number(stateElement.quantity) //counter is not correct because you keep adding the same item to your stateaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  localStorage.setItem("list",JSON.stringify(temp))
                }
              })
           }) 
    }))
   
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
        <Text style={styles.Text}>{item.oldprice}DT</Text>
        <Text>{item.type}</Text>
        <Button title="press me" color="black" onPress={()=>this.handleClick(item)}/>
        
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
      fontSize:24
    },
   Text:{
      fontSize:15,
      marginLeft:110
    },
    card:{
      marginTop:"1%",
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
          height:170,
          resizeMode:'cover'
     }
  });

export default product;