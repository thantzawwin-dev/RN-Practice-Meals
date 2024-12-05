import Meal from "@/models/meal";
import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = { data: any };

const List = ({ data }: Props) => {
  return data?.map((dataPoint: string, index: number) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
