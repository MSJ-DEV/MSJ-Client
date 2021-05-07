import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity , Image} from "react-native";
import PaymentView from "../components/StripePayment";
import axios from "react-native-axios";
import AppLoading from "expo-app-loading";
import myConfig from "../../configExpo"
import { Button, Icon, Layout, Spinner } from '@ui-kitten/components';
import {windowHeight, windowWidth} from '../utils/Dimentions';



const paymentScreen = ({ navigation }) => {

  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );
  
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size='small'/>
    </View>
  );
  

  const [response, setResponse] = useState();

  const [makePayment, setMakePayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [amount, setAmout] = useState();
  if (navigation.state.params.total) {
    setTimeout(() => {
      setAmout(+navigation.state.params.total);
    }, 2000);
  } else {
    navigation.goBack();
  }

  const cartInfo = {
    id: "5eruyt35eggr76476236523t3",
    description: "Carrefour",
    amount: amount,
  };

  const onCheckStatus = async (paymentResponse) => {
    setPaymentStatus("Please wait while confirming your payment!");
    setResponse(paymentResponse);

    let jsonResponse = JSON.parse(paymentResponse);
    // perform operation to check payment status

    try {
      console.log("***************** in the suucces try block ");
      const stripeResponse = await axios.post(`${myConfig}/api/payment`, {
        email: "rmadi.med1@gmail.com",
        product: cartInfo,
        authToken: jsonResponse,
      });
//       const stripeResponse = await axios.post(
//         "http://192.168.1.15:3333/api/payment",
//         {
//           email: "rmadi.med1@gmail.com",
//           product: cartInfo,
//           authToken: jsonResponse,
//         },
//       );

      if (stripeResponse) {
        const { paid } = stripeResponse.data;
        if (paid === true) {
          setPaymentStatus("Payment Success");
        } else {
          setPaymentStatus("Payment failed due to some issue");
        }
      } else {
        setPaymentStatus(" Payment failed due to some issue");
      }
    } catch (error) {
      console.log(error);
      setPaymentStatus(" Payment failed due to some issue");
    }
  };

  const paymentUI = () => {
    if (!makePayment) {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            marginTop: 50,
          }}
        >
          <Image source={require("../../assets/payment.png")} style={styles.logo}/>
          <Text style={{ fontSize: 28, margin: 10 , fontWeight:'bold' , color:'#009432'}}> Make Payment </Text>
          <Text style={{ fontSize: 20, fontWeight:'bold',margin: 10 }}>
            {" "}
            Product Description: {cartInfo.description}{" "}
          </Text>
          <Text style={{ fontSize: 20,fontWeight:'bold', margin: 10 }}>
            {" "}
            Payable Amount: {cartInfo.amount}{" DT"}
          </Text>

          <TouchableOpacity
            style={{
              height: 60,
              width: 300,
              backgroundColor: "#009432",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setMakePayment(true);
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 24, fontWeight:'bold' }}>Proceed To Pay</Text>
          </TouchableOpacity>
        </View>
      );

      // show to make payment
    } else {
      if (response !== undefined) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: windowHeight,
              marginTop: 50,
              backgroundColor:"yellow"
            }}
          >
            <Text
              style={{
                fontSize: 25,
                margin: 10,
                alignContent: "center",
                alignItems: "center",
                color: 'green',
                justifyContent: "center",

              }}
            >
              {" "}
              {paymentStatus}{" "}
            </Text>
            {paymentStatus === "Please wait while confirming your payment!" ?
                <Button style={styles.load} appearance='outline' accessoryLeft={LoadingIndicator}>
                ...LOADING
              </Button>: 
              <Button status='success' style={styles.button} onPress={()=> navigation.navigate('Home')}>
                  SUCCESS ✅
              </Button>
            }
       
          </View>
        );
      } else {
        return (
          <PaymentView
            onCheckStatus={onCheckStatus}
            product={cartInfo.description}
            amount={cartInfo.amount}
          />
        );
      }
    }
  };

  return <View style={styles.container}>{paymentUI()}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 100 },
  navigation: { flex: 2, backgroundColor: "red" },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  footer: { flex: 1, backgroundColor: "cyan" },
  load: {
    margin:30,
    backgroundColor:'#0652DD'
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: windowHeight /2,
    width:windowWidth -20,
    resizeMode: "cover",
  },
});

export default paymentScreen;
