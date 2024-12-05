import CategoryGridTile from "@/components/CategoryGridTile";
import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, View, ListRenderItemInfo } from "react-native";
import { RootStackParamList } from "@/App";

type Props = NativeStackScreenProps<RootStackParamList>;

const CategoriesScreen = ({ navigation, route }: Props) => {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData?.item?.title}
        color={itemData?.item?.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
