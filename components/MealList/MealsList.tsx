import MealItem from "@/components/MealItem";
import Meal from "@/models/meal";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
type Props = {
  items: Meal[];
};

const MealsList = ({ items }: Props) => {
  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: 16,
    // marginBottom: 82,
  },
});
