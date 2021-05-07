import React, { useState, useRef, useEffect } from "react";
import axios from "react-native-axios";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  Touchable,
} from "react-native";
import Carousel from "../components/carousel/carousel";
import data from "../components/carousel/data/data";

const { height, width } = Dimensions.get("window");

const home = () => {
  // console.log("data", data);
  return (
    <View style={styles.header}>
      <ScrollView>
        <Carousel data={data} />
        <Text style={styles.titleCatalogues}>NOS CATALOGUES DE MOMENTS</Text>

        {/* ********************************* catalogues ********************************* */}
        <View style={styles.catalogueBigContainer}>
          <View style={styles.catalogueContainer}>
            {/* ******** catalogue carrefour express ******** */}
            <TouchableOpacity
              style={catalogueText.imageAndText}
              onPress={() =>
                Linking.openURL(
                  "https://www.carrefourtunisie.com/catalogue-carrefour-express-819",
                )
              }
            >
              <Image
                style={styles.catalogueImage}
                source={require("../../assets/carrefourExpress.png")}
              />
              <Text style={catalogueText.titleExpress}>Carrefour Express</Text>
              <Text style={catalogueText.descriptionExpress}>
                DU 30/04/2021 AU 16/05/2021
              </Text>
            </TouchableOpacity>

            {/* ******** catalogue carrefour La Marse ******** */}

            <TouchableOpacity
              style={catalogueText.imageAndText}
              onPress={() =>
                Linking.openURL(
                  "https://www.carrefourtunisie.com/catalogue-carrefour-hyper-816",
                )
              }
            >
              <Image
                style={styles.catalogueImage}
                source={require("../../assets/carrefourGabes.png")}
              />
              <Text style={catalogueText.titleLaMarsa}>
                Carrefour La Marsa & Mall of Sousse
              </Text>
              <Text style={catalogueText.descriptionLaMarsa}>
                DU 28/04/2021 AU 16/05/2021
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.catalogueContainer}>
            {/* ******** catalogue carrefour Gabes ******** */}
            <TouchableOpacity
              style={catalogueText.imageAndText}
              onPress={() =>
                Linking.openURL(
                  "https://www.carrefourtunisie.com/catalogue-carrefour-hyper-817",
                )
              }
            >
              <Image
                style={styles.catalogueImage}
                source={require("../../assets/carrefourGabes.png")}
              />
              <Text style={catalogueText.titleGabes}>Carrefour Gabes</Text>
              <Text style={catalogueText.descriptionGabes}>
                DU 28/04/2021 AU 16/05/2021
              </Text>
            </TouchableOpacity>

            {/* ******** catalogue carrefour Market ******** */}
            <TouchableOpacity
              style={catalogueText.imageAndText}
              onPress={() =>
                Linking.openURL(
                  "https://www.carrefourtunisie.com/catalogue-carrefour-market-818",
                )
              }
            >
              <Image
                style={styles.catalogueImage}
                source={require("../../assets/carrefourMarket.png")}
              />
              <Text style={catalogueText.titleMarket}>Carrefour Market</Text>
              <Text style={catalogueText.descriptionMarket}>
                DU 29/04/2021 AU 16/05/2021
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.backgroundLogo}>
        <View style={styles.logoStyle}>
          {/* ******** logo carrefour ******** */}
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.carrefourtunisie.com")}
          >
            <Image
              style={styles.carrefourLogo}
              source={require("../../assets/carrefourLogo.png")}
            />
          </TouchableOpacity>

          {/* ******** logo twitter ******** */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://twitter.com/carrefour_tn?lang=en")
            }
          >
            <Image
              style={styles.twitterLogo}
              source={require("../../assets/twitterLogo.png")}
            />
          </TouchableOpacity>

          {/* ******** logo facebook ******** */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.facebook.com/Hyper.Carrefour.Tunisie/",
              )
            }
          >
            <Image
              style={styles.facebookLogo}
              source={require("../../assets/facebookLogo.png")}
            />
          </TouchableOpacity>

          {/* ******** logo instagram ******** */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/carrefour_tunisie/?hl=fr",
              )
            }
          >
            <Image
              style={styles.instagramLogo}
              source={require("../../assets/instagramLogo.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.imageFooter}
            source={require("../../assets/footer.png")}
          />
        </View>
      </View>


const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: "#fff8eb",
  },
  imageFooter: {
    height: 60,
    width,
  },
  backgroundLogo: {
    backgroundColor: "transparent",
  },
  facebookLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  instagramLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  twitterLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  carrefourLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  logoStyle: {
    flexDirection: "row",
    alignSelf: "center",
  },
  titleCatalogues: {
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
  },
  catalogueBigContainer: {
    width,
    height: 770,
  },
  catalogueContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  catalogueImage: {
    height: 300,
    width: 200,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});

const catalogueText = StyleSheet.create({
  titleLaMarsa: {
    fontWeight: "bold",
    fontSize: 16,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionLaMarsa: {
    fontSize: 12,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  titleExpress: {
    fontWeight: "bold",
    fontSize: 16,
    color: "green",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionExpress: {
    fontSize: 12,
    color: "green",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  titleMarket: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionMarket: {
    fontSize: 12,
    color: "red",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  titleGabes: {
    fontWeight: "bold",
    fontSize: 16,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionGabes: {
    fontSize: 12,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  imageAndText: {
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default home;

