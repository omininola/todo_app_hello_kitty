import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input( props: TextInputProps ) {
  return <TextInput style={styles.input} {...props} />
}

const styles = StyleSheet.create({
  input: {
    color: "hsl(319 100% 70%)",
    
    borderWidth: 4,
    borderColor: "hsl(319 100% 80%)",
    borderRadius: 12,
    outlineColor: "transparent",

    fontSize: 24,
    
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 24,
  }
})