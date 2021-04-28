import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import googleThemes from "../components/googleMapsTheme";
import carrefourCoords from "../components/carrefourLocation";

// google maps theme
const darkStyle = googleThemes.googleMapDarkTheme;
const retroStyle = googleThemes.googleRetroTheme;
const aubergineStyle = googleThemes.googleMapAubergineTheme;

// carrefour coords
const carrefourMarket = carrefourCoords.carrefourMarket;

// to get the phone height
const height = Dimensions.get("window").height;
const foundUs = () => {
  console;
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.screen}
      customMapStyle={retroStyle}
      initialRegion={{
        latitude: 33.98825,
        longitude: 9.4324,
        latitudeDelta: 6,
        longitudeDelta: 0,
      }}
    >
      {/* creating a square for the map theme */}

      {/* ************************** Carrefour Blue markers for big Carrefour ************************** */}
      <Marker
        coordinate={{
          latitude: 33.98825,
          longitude: 8.4324,
        }}
        title="carrefour souk el ahad"
        description=" test description"
        pinColor="blue"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Carrefour</Text>
              {/* <Image style={styles.image} source={require("")} /> */}
            </View>
            <View style={styles.arrowBorder}></View>
            <View style={styles.arrow}></View>
          </View>
        </Callout>
      </Marker>

      {/* ************************** Carrefour red markers Careefour market ************************** */}
      {/* The Marsa Carrefour */}
      <Marker
        coordinate={{
          latitude: 36.86654201560798,
          longitude: 10.297672509298287,
        }}
        title="The Marsa Carrefour"
        pinColor="red"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>The Marsa Carrefour</Text>
              {/* <Image style={styles.image} source={require("")} /> */}
            </View>
            <View style={styles.arrowBorder}></View>
            <View style={styles.arrow}></View>
          </View>
        </Callout>
      </Marker>

      {/* Carrefour Sousse */}
      <Marker
        coordinate={{
          latitude: 35.90383021315254,
          longitude: 10.541738520496269,
        }}
        title="Carrefour Sousse"
        pinColor="red"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>The Marsa Carrefour</Text>
              {/* <Image style={styles.image} source={require("")} /> */}
            </View>
            <View style={styles.arrowBorder}></View>
            <View style={styles.arrow}></View>
          </View>
        </Callout>
      </Marker>

      {/* Carrefour Gabes */}
      <Marker
        coordinate={{
          latitude: 33.870152746556606,
          longitude: 10.108541336831475,
        }}
        title="Carrefour Sousse"
        pinColor="red"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>The Marsa Carrefour</Text>
              {/* <Image style={styles.image} source={require("")} /> */}
            </View>
            <View style={styles.arrowBorder}></View>
            <View style={styles.arrow}></View>
          </View>
        </Callout>
      </Marker>

      {/* ************************** Carrefour green markers Careefour express ************************** */}
      {/* Carrefour Market  */}
      <View>
        {carrefourMarket.map((coord, key) => {
          console.log(coord);
          return (
            <Marker
              key={key}
              coordinate={{
                latitude: 33.98825,
                longitude: 10.4324,
              }}
              title="carrefour souk el ahad"
              description=" test description"
              pinColor="green"
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>Carrefour</Text>
                    {/* <Image style={styles.image} source={require("")} /> */}
                  </View>
                  <View style={styles.arrowBorder}></View>
                  <View style={styles.arrow}></View>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </View>
    </MapView>
  );
};

export default foundUs;

const styles = StyleSheet.create({
  screen: {
    height,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  themeMapSquare: {
    width: 120,
    height: 120,
    backgroundColor: "#00BCD4",
  },
});
