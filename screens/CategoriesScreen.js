import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

const CategoriesScreen = () => {
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
