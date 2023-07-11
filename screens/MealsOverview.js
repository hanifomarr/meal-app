import { View, Text, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/data";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route }) => {
  const catID = route.params.categoryID;
  const displayMealItem = MEALS.filter(
    (itemdata) => itemdata.categoryIds.indexOf(catID) >= 0
  );

  function renderMealList(itemData) {
    const item = itemData.item;
    const mealItemProp = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProp} />;
  }

  return (
    <View>
      <FlatList
        data={displayMealItem}
        keyExtractor={(item) => item.id}
        renderItem={renderMealList}
      />
    </View>
  );
};

export default MealsOverview;
