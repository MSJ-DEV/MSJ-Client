import React, { useState, useRef, useEffect } from "react";
import axios from "react-native-axios";
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
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 1.5;

  const [data, SetData] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.12:3333/api/poducts")
      .then((res) => {
        SetData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          },
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: 20,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
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
            inputRange: opacityInputRange,
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
                source={{ uri: item.image }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                  marginRight: 20,
                }}
              />
              <View>
                <Text style={{ fontSize: 24, fontWeight: "900" }}>
                  {" "}
                  {item.title}
                  <Text style={{ color: "#1e3799" }}>{item.newprice} DT</Text>
                </Text>
                <Text style={{ fontSize: 23 }}>{item.type}</Text>
              </View>
              {/* <Button
                  title="ADD To List"
                  color="#0652DD"
                  onPress={() => handleClick(item)}
                /> */}
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default home;
