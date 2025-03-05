import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Subtitle({
  children
}: PropsWithChildren
) {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "hsl(319 100% 70%)",
  }
})