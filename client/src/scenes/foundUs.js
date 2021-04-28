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
const carrefour = carrefourCoords.carrefour;
const carrefourMarket = carrefourCoords.carrefourMarket;
const carrefourExpress = carrefourCoords.carrefourExpress;

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
      <View>
        {carrefour.map((coord, key) => {
          return (
            <Marker
              coordinate={{
                latitude: coord.c.latitude,
                longitude: coord.c.longitude,
              }}
              title={coord.c.name}
              pinColor="blue"
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>{coord.c.name}</Text>
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

      {/* ************************** Carrefour red markers Careefour market ************************** */}
      <View>
        {carrefourMarket.map((coord, key) => {
          return (
            <Marker
              coordinate={{
                latitude: coord.cm.latitude,
                longitude: coord.cm.longitude,
              }}
              title="Carrefour"
              pinColor="red"
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

      {/* ************************** Carrefour green markers Careefour express ************************** */}
      {/* Carrefour Market  */}
      <View>
        {carrefourExpress.map((coord, key) => {
          return (
            <Marker
              key={key}
              coordinate={{
                latitude: coord.cex.latitude,
                longitude: coord.cex.longitude,
              }}
              title="carrefour"
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
