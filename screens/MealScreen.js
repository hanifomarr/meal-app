import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/data";

const MealScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={{ width: "100%", height: 200 }}
      />

      <Text>{selectedMeal.title}</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealScreen;
