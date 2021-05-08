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
  goTopayment=()=> {
    if (this.subtotalPrice() === 0 ) {
  Alert.alert('OOPS!', 'You should select Some Items', [{
    text: "unterstood",
    style: "cancel",
  }])


    }else if (this.subtotalPrice()<100) {
      Alert.alert('OOPS!', 'You should by at least over then 100 DT ', [{
        text: "unterstood",
        style: "cancel",
      }])
    }else {
      let total = this.subtotalPrice().toFixed(2)
      this.props.navigation.navigate('PaymentScreen', {total})  
    }
  }

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
            color="#0984e3"
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
                // styling card color 
                  key={i}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#dfe4ea",
                    marginBottom: 2,
                    height: 120,
                    borderRadius:20
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
                        color={item.promotion == 1 ? "#009432" : "#000"}
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
                    
                      style={{ paddingRight: 10 }}
                    >
                      {/* image position  */}
                      <Image
                        source={{ uri: item.image }}
                        style={[
                          styles.centerElement,
                          { height: 90, width: 90, borderRadius: 70,
                            alignContent:'center' , justifyContent:'center' , marginTop:14, position:'relative', bottom:-15},
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
                      {/* ITEM  NAME */}
                      <Text numberOfLines={1} style={{ fontSize: 22 , marginTop:10, color:'#000' , position:'relative', top:20 , fontFamily:'Kufam-SemiBoldItalic'}}>
                        {item.name}
                      </Text>
                 
                      <Text numberOfLines={1} style={{ color: "#8f8f8f" }}>
                        {item.color ? "Variation: " + item.color : ""}
                      </Text>
                      <Text
                        numberOfLines={1}
                        // color of Price 
                        style={{ color: "#d50100", marginBottom: 5 , alignItems:'center', justifyContent:'center', 
                         width: 80, backgroundColor: '#ffed00', fontSize:20, height:35
                      }}
                      >
                        {item.quantity * item.oldprice} TND
                      </Text>
                      <View style={{ flexDirection: "row" , marginLeft:100, marginBottom:10, position:'relative', bottom:37.5}}>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler("less", i)}
                          style={{ borderWidth: 1, borderColor: "#1d5aa9" , borderRadius:20, backgroundColor:'orange'}}
                        >
                          <MaterialIcons name="remove" size={22} color="#000" />
                        </TouchableOpacity>
                        <Text
                          style={{
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            borderColor: "#000",
                            paddingHorizontal: 10,
                            paddingTop: -10,
                            color: "#000",
                            fontSize: 20,
                          }}
                        >
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler("more", i)}
                          style={{ borderWidth: 1, borderColor: "#1d5aa9", borderRadius:20 , backgroundColor:'orange'}}
                        >
                          <MaterialIcons name="add" size={22} color="#000" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.centerElement, { width: 60 }]}>
                    <TouchableOpacity
                      style={[styles.centerElement, { width: 32, height: 32 ,paddingTop:10}]}
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
          // backGround color of footer
          <View
            style={{
              backgroundColor: "#0984e3",
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
                <Text style={{color:'#fff', fontSize:16}}>Voucher</Text>
                <View style={{ paddingRight: 20 }}>
                   <TextInput
                    style={{
                      paddingHorizontal: 10,
                      backgroundColor: "#fff",
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
                    color={selectAll == true ? "#009432" : "#000"}
                    style={{alignItems:'center'}}
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
                <Text style={{color:'#fff',fontSize:16 }}>Select All</Text>
                <View
                  style={{
                    flexDirection: "row",
                    paddingRight: 20,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff" , fontWeight:'bold'}}>SubTotal: </Text>
                  <Text style={{color:'#fff', fontWeight:'bold'}}>{this.subtotalPrice().toFixed(2)} TND</Text>
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
                    backgroundColor: "#009432",
                    width: 100,
                    height: 25,
                    borderRadius: 5,
                  },
                ]}
                onPress={() => this.goTopayment()}
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