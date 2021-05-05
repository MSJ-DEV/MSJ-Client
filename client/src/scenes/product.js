import React, { useEffect, useState } from "react";
import axios from "react-native-axios";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from "react-native";
import Cart from "./myList";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { State } from 'react-native-gesture-handler';

const product = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [array, setArray] = React.useReducer((state = [], action) => [
    ...state,
    action,
  ]);
  useEffect(() => {
    axios
      .get("http://192.168.1.12:3333/api/poducts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const goToList = () => {
    navigation.navigate("MyList");
  };

  const handleClick = async (item) => {
    let storage = await AsyncStorage.getItem("item");
    let parseStorage = JSON.parse(storage);
    var containe = -1;
    if (array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === item.id) {
          containe = i;
        }
      }
    }
    if (containe === -1) {
      setArray(item);
    }

    await AsyncStorage.setItem("item", JSON.stringify(array));

    console.log("###########################", parseStorage);
  };

  return (
    <View>
      <Button
        style={{ flex: 1, zIndex: "-999" }}
        onPress={() => goToList()}
        title="Check my List "
        color="#0652DD"
        accessibilityLabel="Learn more about this purple button"
      />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.card} key={item.id}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.image }}
                  onPress={() => handleClick(items)}
                />
                <Text
                  style={styles.cardText}
                  onPress={() => handleClick(items)}
                >
                  {item.name}
                </Text>
                <Text style={styles.Text} onPress={() => handleClick(items)}>
                  {item.oldprice}DT
                </Text>
                <Text
                  onPress={() => handleClick(items)}
                  style={{ marginLeft: 110, fontSize: 20 }}
                >
                  {item.type}
                </Text>
                <Button
                  title="ADD To List"
                  color="#0652DD"
                  onPress={() => handleClick(item)}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  cardText: {
    fontSize: 24,
    alignItems: "center",
    marginLeft: 110,
  },
  Text: {
    fontSize: 24,
    marginLeft: 110,
    color: "#009432",
  },
  card: {
    marginTop: "1%",
    backgroundColor: "#fff",
    marginBottom: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 1,
    marginLeft: 10,
  },
  cardImage: {
    width: "80%",
    height: 170,
    resizeMode: "cover",
  },
});
