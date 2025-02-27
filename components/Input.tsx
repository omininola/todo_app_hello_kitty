import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input( props: TextInputProps ) {
  return <TextInput style={styles.input} {...props} />
}

const styles = StyleSheet.create({
  input: {
    color: 'white',
    
    borderWidth: 4,
    borderColor: '#FDB7EA',
    borderRadius: 12,
    outlineColor: 'transparent',

    fontSize: 24,
    
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 24,
  }
})