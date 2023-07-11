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
    return <MealItem title={itemData.item.title} />;
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
