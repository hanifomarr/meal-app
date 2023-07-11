import { View, Text } from "react-native";
import React from "react";

const MealsOverview = ({ route }) => {
  const catID = route.params.categoryID;
  return (
    <View>
      <Text>MealsOverview{catID}</Text>
    </View>
  );
};

export default MealsOverview;
