import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Title({
  children
}: PropsWithChildren
) {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "hsl(319 100% 60%)",
    fontWeight: "600"
  }
})