import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    backgroundColor: '#FDB7EA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: '600'
  }
})