
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  StatusBar,
  Animated,
} from "react-native";

const home = () => {
  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

  const [data, SetData] = useState([
    {
      albumkey: 1,
      key: "1",
      title: "accusamus beatae ",
      url:
        "https://astronovaproductid.com/wp-content/uploads/bottle-foods-drinks-hero.png",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumkey: 1,
      key: "2",
      title: "reprehenderit ",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxD3uxFkxwfQ1waX1ASPNj-l-FFTJBfuHq0Vhepc0fnR3YCvPJ3R5TmB_U4jNt1m51Ks0&usqp=CAU",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumkey: 1,
      key: "3",
      title: "officia porro",
      url:
        "https://worldfiner.com/sites/default/files/2017-08/product_family_blank_labelsg_1024_1.png",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumkey: 1,
      key: "4",
      title: "culpa odio ",
      url:
        "https://5.imimg.com/data5/KC/HI/SX/SELLER-3071523/sweet-lemon-pickles-250x250.png",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumkey: 1,
      key: "5",
      title: "natus nisi ",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMePbP7bN66TPsDQUaxpwEqznhIYlR1rqnxsXvMH1F5r-GmaUmjoRKtPM7bl0V6qdZu6Y&usqp=CAU",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      albumkey: 1,
      key: "6",
      title: "accusamus ",
      url:
        "https://i.pinimg.com/736x/7c/09/d0/7c09d067db093c7a9b6736dd4dfd4e56.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      albumkey: 1,
      key: "7",
      title: "officia delectus ",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "8",
      title: "officia delectus ",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: " 9",
      title: "officia delectus ",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: " 10",
      title: "officia delectus",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "11",
      title: "officia delectus ",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "12",
      title: "officia delectu",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "13",
      title: "officia delectus",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "14",
      title: "officia delectus",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: " 15",
      title: "officia delectus ",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "16",
      title: "officia delectus ",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "17",
      title: "officia delectus",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumkey: 1,
      key: "18",
      title: "officia delectu",
      url:
        "https://www.ruchifoodline.com/img/products/RUCHI---Daliya-Crushed-Wheat-500g-55.jpg",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
  ]);

  // const pressHandler = ()=> {
  //     navigation.navigate('Product')   }

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", marginRight: 20 }}>
      <Image
        source={{
          uri:
            "https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w",
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />

      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: 20,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 20),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange:opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                flexDirection: "row",
                padding: 10,
                marginBottom: 15,
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 20,
                opacity,
                transform: [{ scale }],
              }}
            >
              <Image
                source={{ uri: item.url }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                  marginRight: 20,
                }}
              />
              <View>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>
                  {" "}
                  {item.title}
                </Text>
                <Text>hello rmadi</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default home;

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
