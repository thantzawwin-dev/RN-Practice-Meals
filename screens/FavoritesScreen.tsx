import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "@/components/MealList/MealsList";
import { FavoritesContext } from "@/store/context/favorites-context";
import { MEALS } from "@/data/dummy-data";
import { useAppSelector, useAppStore } from "@/store/redux/hooks";

type Props = {};

const FavoritesScreen = (props: Props) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
