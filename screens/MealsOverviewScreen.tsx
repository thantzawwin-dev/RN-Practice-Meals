import { RootStackParamList } from "@/App";
import MealItem from "@/components/MealItem";
import MealsList from "@/components/MealList/MealsList";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import Meal from "@/models/meal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen = ({ navigation, route }: Props) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId)?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <View style={styles.rootContainer}>
      <MealsList items={displayedMeals} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 85, flex: 1 },
});
