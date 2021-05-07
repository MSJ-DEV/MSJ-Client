// import React, { useEffect, useState } from "react";
// import axios from "react-native-axios";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Button,
//   StatusBar,
//   Animated,
// } from "react-native";
// import Cart from "./myList";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import myConfig from "../../configExpo";
// // import { State } from 'react-native-gesture-handler';

// const product = ({ navigation }) => {
//   const SPACING = 20;
//   const AVATAR_SIZE = 70;
//   const ITEM_SIZE = AVATAR_SIZE + SPACING * 1.5;
//   const [data, setData] = useState([]);
//   const [items, setItems] = useState([]);
//   const [array, setArray] = React.useReducer((state = [], action) => [
//     ...state,
//     action,
//   ]);

//   const scrollY = React.useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     axios
//       .get(`${myConfig}/api/poducts`)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   const goToList = () => {
//     navigation.navigate("MyList");
//   };

//   const handleClick = async (item) => {
//     let storage = await AsyncStorage.getItem("item");
//     let parseStorage = JSON.parse(storage);
//     var containe = -1;
//     if (array) {
//       for (var i = 0; i < array.length; i++) {
//         if (array[i].id === item.id) {
//           containe = i;
//         }
//       }
//     }
//     if (containe === -1) {
//       setArray(item);
//     }

//     await AsyncStorage.setItem("item", JSON.stringify(array));
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fa8231", marginRight: 20 }}>
//       <Animated.FlatList
//         data={data}
//         onScroll={Animated.event(
//           [
//             {
//               nativeEvent: { contentOffset: { y: scrollY } },
//             },
//           ],
//           {
//             useNativeDriver: true,
//           },
//         )}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{
//           padding: 20,
//           paddingTop: StatusBar.currentHeight || 42,
//         }}
//         renderItem={({ item, index }) => {
//           const inputRange = [
//             -1,
//             0,
//             ITEM_SIZE * index,
//             ITEM_SIZE * (index + 2),
//           ];
//           const opacityInputRange = [
//             -1,
//             0,
//             ITEM_SIZE * index,
//             ITEM_SIZE * (index + 1),
//           ];
//           const scale = scrollY.interpolate({
//             inputRange,
//             outputRange: [1, 1, 1, 0],
//           });
//           const opacity = scrollY.interpolate({
//             inputRange: opacityInputRange,
//             outputRange: [1, 1, 1, 0],
//           });
//           return (
//             <Animated.View
//               style={{
//                 flexDirection: "row",
//                 padding: 10,
//                 marginBottom: 15,
//                 backgroundColor: "rgba(255,255,255,0.9)",
//                 borderRadius: 12,
//                 shadowColor: "#000",
//                 shadowOffset: { width: 0, height: 10 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 20,
//                 opacity,
//                 transform: [{ scale }],
//               }}
//             >
//               <Image
//                 source={{ uri: item.image }}
//                 style={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: 70,
//                   marginRight: 20,
//                 }}
//               />
//               <View>
//                 <TouchableOpacity onPress={() => handleClick(item)}>
//                   <Text style={{ fontSize: 24, fontWeight: "900" }}>
//                     {" "}
//                     {item.title}
//                     <Text style={{ color: "#1e3799" }}>{item.newprice} DT</Text>
//                   </Text>
//                   <Text style={{ fontSize: 23 }}>{item.type}</Text>
//                   {/* <Button
//               style={{}}
//                title="ADD To List"
//                color="#0652DD"
//                onPress={() => handleClick(item)}
//               /> */}
//                 </TouchableOpacity>
//               </View>
//             </Animated.View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default product;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 20,
//     justifyContent: "center",
//     flexDirection: "row",
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: "rgba(255,255,255,0.9)",
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//   },
//   cardText: {
//     fontSize: 24,
//     alignItems: "center",
//     marginLeft: 110,
//   },
//   Text: {
//     fontSize: 24,
//     marginLeft: 110,
//     color: "#009432",
//   },
//   card: {
//     marginTop: "1%",
//     backgroundColor: "#fff",
//     marginBottom: 10,
//     width: "80%",
//     shadowColor: "#000",
//     shadowOpacity: 1,
//     marginLeft: 10,
//   },
//   cardImage: {
//     width: "80%",
//     height: 170,
//     resizeMode: "cover",
//   },
//   btn: {},
// });

import React, { useState } from "react";
import { StyleSheet, View, Image, Dimensions, Animated } from "react-native";
import { Button, Card, Layout, Text, Input } from "@ui-kitten/components";

const { height, width } = Dimensions.get("window");

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Maldives</Text>
    <Text category="s1">By Wikipedia</Text>
  </View>
);

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Button style={styles.footerControl} size="small">
      - 1
    </Button>

    <Button style={styles.footerControl} size="small">
      + 1
    </Button>
  </View>
);

const Product = () => {
  // for quantity
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} footer={Footer}>
          <View style={styles.topCard}>
            <Image
              style={styles.imageCard}
              source={require("../../assets/facebookLogo.png")}
            />
            <Text style={styles.text}>Product name</Text>
            <Input
              style={styles.input}
              textAlign={"center"}
              value={value}
              placeholder="0"
              keyboardType="number-pad"
              onChangeText={(nextValue) => setValue(nextValue)}
            />
          </View>
        </Card>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: height / 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: 20,
    height: 60,
    alignSelf: "center",
  },
  footerControl: {
    // marginHorizontal: 2,
    backgroundColor: "#fa8231",
  },
  imageCard: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    width: 80,
    marginTop: 20,
    alignSelf: "center",
  },
});

export default Product;
