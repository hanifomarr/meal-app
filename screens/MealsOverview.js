import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/data";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route, navigation }) => {
  const catID = route.params.categoryID;
  const displayMealItem = MEALS.filter(
    (itemdata) => itemdata.categoryIds.indexOf(catID) >= 0
  );

  function mealOverviewHandler() {
    navigation.navigate("MealScreen");
  }

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [navigation, catID]);

  function renderMealList(itemData) {
    const item = itemData.item;
    const mealItemProp = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProp} onPress={mealOverviewHandler} />;
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
