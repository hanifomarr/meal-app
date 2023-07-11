import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View style={styles.mealContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailsContainer}>
            <Text>{duration}</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealContainer: {
    margin: "5%",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  detailsContainer: {
    flexDirection: "row",
  },
});
