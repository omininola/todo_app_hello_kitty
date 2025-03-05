import { PropsWithChildren } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

export default function Button({
  children,
  ...props
}: & PropsWithChildren & PressableProps
) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
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