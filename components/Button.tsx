import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function Button({
  children,
  onPress
}: & PropsWithChildren & TouchableOpacityProps
) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "hsl(319 100% 75%)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  text: {
    fontSize: 28,
    color: "hsl(319 100% 95%)",
    fontWeight: "600"
  }
})