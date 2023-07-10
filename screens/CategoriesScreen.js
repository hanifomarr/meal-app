import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function gridTileHandler() {
      navigation.navigate("MealsOverviewPage");
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={gridTileHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
