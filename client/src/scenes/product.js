


//   delete(id){
//     axios.delete("http://localhost:3333/api/poducts/"+id)
//     .then((res)=>{
//       this.getData()
//     })
//   }

// async  handleClick(item){    
//  let items = await AsyncStorage.getItem("list");
//  console.log('**********************************',items)
// //  items.map((el)=> {
// //    if (el.id === item.id) {
// //      el.quantity ++;
// //    }else {
     
// //    }
// //  })
  

   
//     // this.setState((previous)=>({array:previous.array.concat([item])}),(()=>{
//     //      if(!AsyncStorage.getItem("list")){
//     //       console.log('my array ****',this.state.array)
//     //       // AsyncStorage.setItem("list",JSON.stringify(this.state.array))
//     //      }
//     //        this.state.array.forEach((stateElement)=>{
//     //           JSON.parse(AsyncStorage.getItem("list")).forEach((storageElement, index)=>{
//     //             if(stateElement.id == storageElement.id){
//     //               let temp=JSON.parse(AsyncStorage.getItem("list"));
//     //               AsyncStorage.setItem("list",JSON.stringify(temp))
//     //             }
//     //           })
//     //        }) 
//     //      }
//     // }))
//   }
   
  
//   render() {

//     return (
//         <View >      
//             <FlatList 
          
//             data={this.state.data}
//             renderItem={({item,index}) => { 
//     return(
//       <View   style={styles.container}>
//         <TouchableOpacity style={styles.card} key={item.id}>
//           <Image style={styles.cardImage} source={{uri:item.image}}/>
//         <Text style={styles.cardText}>{item.name}</Text>
//         <Text style={styles.Text}>{item.oldprice}DT</Text>
//         <Text>{item.type}</Text>
//         <Button title="press me" color="black" onPress={()=>this.handleClick(item)}/>
        
//         </TouchableOpacity>

//         </View>
         
//         ) }}
//         />
//         </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//     container: {
//       flex:1 ,
//       alignItems:"center",
//       justifyContent:"center",
//     },
//     cardText:{
//       fontSize:24
//     },
//    Text:{
//       fontSize:15,
//       marginLeft:110
//     },
//     card:{
//       marginTop:"1%",
//       backgroundColor:'#fff',
//       marginBottom:10,
//       width:'80%',
//       shadowColor:'#000',
//       shadowOpacity:1,
//       shadowOffset:{
//         width:3,
//         height:3
//       }
//     },
//     cardImage:{
//           width:'100%',
//           height:170,
//           resizeMode:'cover'
//      }
//   });

// export default product;
//****************************************************************
import React, { PureComponent, useEffect, useState } from 'react';
import axios from "react-native-axios"
import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList,Button } from 'react-native'
import Cart from './myList'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { State } from 'react-native-gesture-handler';



const product = ({navigation}) => {
  const [data, setData] = useState([]);
  const [items, setItems]= useState([]);
  const [array, setArray] = React.useReducer(( state= [],action)=> ( [...state, action]))
  useEffect(()=> {
    axios.get('http://192.168.1.15:3333/api/poducts').then((res)=> {
      setData(res.data)
      
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])


const  handleClick= async(item)=> { 
 
    
 let storage =  await (AsyncStorage.getItem("item"));
 let parseStorage = JSON.parse(storage)
 var containe = -1;
 if (array) {
    for (var i =0; i< array.length; i++) {
    if (array[i].id === item.id ) {
      containe = i;

      
    }
  }
 }
  if (containe === -1) {
    setArray(item)
  }

  await AsyncStorage.setItem("item",JSON.stringify(array) )

 console.log("###########################", parseStorage)

}
  

  return (
    <View >      
        <FlatList 
          data={data}
          renderItem={({item}) => { 
              return(
                   <View   style={styles.container}>
                  <TouchableOpacity style={styles.card} key={item.id}>
                     <Image style={styles.cardImage} source={{uri:item.image}} onPress={()=> handleClick(items)}/>
                     <Text style={styles.cardText} onPress={()=> handleClick(items)}>{item.name}</Text>
                     <Text style={styles.Text} onPress={()=> handleClick(items)}>{item.oldprice}DT</Text>
                     <Text onPress={()=> handleClick(items)}>{item.type}</Text>
                     <Button title="press me" color="black" onPress={()=> handleClick(item)}/>
            
                  </TouchableOpacity>
    
            </View>
             
            ) }}
            />
            </View>
  )
}

export default product

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
  