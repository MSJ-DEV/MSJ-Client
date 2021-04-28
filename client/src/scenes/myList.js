import React from "react";
import Swal from "sweetalert2";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      cartItemsIsLoading: false,
      cartItems: [],
    };
    this.setItems = this.setItems.bind(this);
  }

  componentDidMount() {
    this.setItems();
  }
  setItems = async () => {
    var x = await AsyncStorage.getItem("item");
    this.setState({ cartItems: JSON.parse(x) });
  };
  selectHandler = (index, value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems[index]["promotion"] = value == 1 ? 0 : 1; // set the new value
    this.setState({ cartItems: newItems }); // set new state
  };

  selectHandlerAll = (value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems.map((item, index) => {
      newItems[index]["promotion"] = value == true ? 0 : 1; // set the new value
    });
    this.setState({
      cartItems: newItems,
      selectAll: value == true ? false : true,
    }); // set new state
  };

  deleteHandler = async (index) => {
    var listId = await AsyncStorage.getItem("item");
    var myid = JSON.parse(listId);
    //   console.log('***************', myid)

    myid.map(async (e, i) => {
      if (index === e.id) {
        // console.log("########################")

        myid.splice(i, 1);
      }
      // console.log("new my id ***")

      // console.log(myid)
      await AsyncStorage.setItem("item", JSON.stringify(myid));

      this.setState({ cartItems: myid });
    });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  quantityHandler = (action, index) => {
    const newItems = [...this.state.cartItems]; // clone the array

    let currentQty = newItems[index]["quantity"];
    if (action == "more") {
      newItems[index]["quantity"] = currentQty * 1 + 1;
    } else if (action == "less") {
      newItems[index]["quantity"] = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({ cartItems: newItems }); // set new state
  };

  subtotalPrice = () => {
    const { cartItems } = this.state;
    if (cartItems) {
      return cartItems.reduce(
        (sum, item) =>
          sum +
          (item && item.promotion == 1 ? item.quantity * item.oldprice : 0),
        0,
      );
    }
    return 0;
  };

  goToProduct = () => {
    this.props.navigation.navigate("Product");
  };

  render() {
    const styles = StyleSheet.create({
      centerElement: { justifyContent: "center", alignItems: "center" },
    });

    const { cartItems, cartItemsIsLoading, selectAll } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
        <View>
          <Button
            style={{ zIndex: "-999" }}
            onPress={() => this.goToProduct()}
            title="See all product "
            color="#0652DD"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            marginBottom: 10,
          }}
        >
          <View style={[styles.centerElement, { width: 50, height: 50 }]}>
            <Ionicons name="ios-cart" size={25} color="#000" />
          </View>

          <View style={[styles.centerElement, { height: 50 }]}>
            <Text style={{ fontSize: 18, color: "#000" }}>Shopping Cart</Text>
          </View>
        </View>

        {cartItemsIsLoading ? (
          <View style={[styles.centerElement, { height: 300 }]}>
            <ActivityIndicator size="large" color="#ef5739" />
          </View>
        ) : (
          <ScrollView>
            {cartItems &&
              cartItems.map((item, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#fff",
                    marginBottom: 2,
                    height: 120,
                  }}
                >
                  <View style={[styles.centerElement, { width: 60 }]}>
                    <TouchableOpacity
                      style={[styles.centerElement, { width: 32, height: 32 }]}
                      onPress={() => this.selectHandler(i, item.promotion)}
                    >
                      <Ionicons
                        name={
                          item.promotion == 1
                            ? "ios-checkmark-circle"
                            : "ios-checkmark-circle-outline"
                        }
                        size={25}
                        color={item.promotion == 1 ? "#0faf9a" : "#aaaaaa"}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flexGrow: 1,
                      flexShrink: 1,
                      alignSelf: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        /*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/
                      }}
                      style={{ paddingRight: 10 }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={[
                          styles.centerElement,
                          { height: 60, width: 60, backgroundColor: "#eeeeee" },
                        ]}
                      />
                    </TouchableOpacity>
                    {/* go here to fix the style of the card  */}
                    <View
                      style={{
                        flexGrow: 1,
                        flexShrink: 1,
                        alignSelf: "center",
                      }}
                    >
                      <Text numberOfLines={1} style={{ fontSize: 22 }}>
                        {item.name}
                      </Text>
                      <Text numberOfLines={1} style={{ color: "#8f8f8f" }}>
                        {item.color ? "Variation: " + item.color : ""}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{ color: "#000", marginBottom: 10 }}
                      >
                        {item.quantity * item.oldprice} TND
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler("less", i)}
                          style={{ borderWidth: 1, borderColor: "#000" }}
                        >
                          <MaterialIcons name="remove" size={22} color="#000" />
                        </TouchableOpacity>
                        <Text
                          style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: "#cccccc",
                            paddingHorizontal: 7,
                            paddingTop: 3,
                            color: "#000",
                            fontSize: 15,
                          }}
                        >
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler("more", i)}
                          style={{ borderWidth: 1, borderColor: "#000" }}
                        >
                          <MaterialIcons name="add" size={22} color="#000" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.centerElement, { width: 60 }]}>
                    <TouchableOpacity
                      style={[styles.centerElement, { width: 32, height: 32 }]}
                      onPress={() => this.deleteHandler(item.id)}
                    >
                      <Ionicons name="md-trash" size={25} color="#ee4d2d" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </ScrollView>
        )}

        {!cartItemsIsLoading && (
          <View
            style={{
              backgroundColor: "#fff",
              borderTopWidth: 2,
              borderColor: "#f6f6f6",
              paddingVertical: 5,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.centerElement, { width: 60 }]}>
                <View style={[styles.centerElement, { width: 32, height: 32 }]}>
                  <MaterialCommunityIcons
                    name="ticket"
                    size={25}
                    color="#f0ac12"
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexGrow: 1,
                  flexShrink: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Voucher</Text>
                <View style={{ paddingRight: 20 }}>
                  <TextInput
                    style={{
                      paddingHorizontal: 10,
                      backgroundColor: "#f0f0f0",
                      height: 25,
                      borderRadius: 4,
                    }}
                    placeholder="Enter voucher code"
                    value={""}
                    onChangeText={(searchKeyword) => {}}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.centerElement, { width: 60 }]}>
                <TouchableOpacity
                  style={[styles.centerElement, { width: 32, height: 32 }]}
                  onPress={() => this.selectHandlerAll(selectAll)}
                >
                  <Ionicons
                    name={
                      selectAll == true
                        ? "ios-checkmark-circle"
                        : "ios-checkmark-circle-outline"
                    }
                    size={25}
                    color={selectAll == true ? "#0faf9a" : "#aaaaaa"}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexGrow: 1,
                  flexShrink: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Select All</Text>
                <View
                  style={{
                    flexDirection: "row",
                    paddingRight: 20,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#8f8f8f" }}>SubTotal: </Text>
                  <Text>{this.subtotalPrice().toFixed(2)} TND</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                height: 32,
                paddingRight: 20,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.centerElement,
                  {
                    backgroundColor: "#0faf9a",
                    width: 100,
                    height: 25,
                    borderRadius: 5,
                  },
                ]}
                onPress={() => console.log("test")}
              >
                <Text style={{ color: "#ffffff" }}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}
