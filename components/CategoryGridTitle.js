import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const CategoryGridTitle = ({ title, color }) => {
  return (
    <View style={[styles.gridCotainer, { backgroundColor: color }]}>
      <Pressable
        style={styles.buttonContainer}
        android_ripple={{ color: "#ccc" }}
      >
        <View>
          <Text style={styles.categoryTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridCotainer: {
    flex: 1,
    margin: 16,
    height: 160,
    elevation: 5,
    borderRadius: 8,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
