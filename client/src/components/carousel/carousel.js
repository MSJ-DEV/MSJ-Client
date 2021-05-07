import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";

import CarouselItems from "./carouselItems";

const { width, height } = Dimensions.get("window");
let flatList;
function swapeBetweenImages(dataList) {
  const numberOfImages = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(() => {
    scrolled++;
    if (scrolled < numberOfImages) {
      scrollValue += width;
    } else {
      scrolled = 0;
      scrollValue = 0;
    }

    this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
  }, 3000);
}

const Carousel = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);
  useEffect(() => {
    setDataList(data);
    swapeBetweenImages(dataList);
  });

  //   console.log();
  if (data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItems item={item} />;
          }}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
        />

        <View style={styles.dot}>
          {data.map((dot, index) => {
            var opacity = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={index}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#fa8231",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  console.log('can"t get data');
  return null;
};

const styles = StyleSheet.create({
  dot: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Carousel;
