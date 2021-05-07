import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

// getting the dimensions of the phone
const { width, height } = Dimensions.get("window");

const CarouselItems = ({ item }) => {
  //   console.log("item from carousel view", item.title);
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.url }} />
      <View style={styles.textView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.8,
      height: 0.8,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  description: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.8,
      height: 0.8,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default CarouselItems;
