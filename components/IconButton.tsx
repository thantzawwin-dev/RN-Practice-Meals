import {
  StyleSheet,
  Text,
  View,
  Pressable,
  PressableProps,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

// Extract the correct type for the `name` prop from Ionicons
type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

type Props = PressableProps & {
  icon: IoniconsName;
  color: string;
};

const IconButton = ({ onPress, icon, color }: Props) => {
  return (
    <Pressable
      onPressIn={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
