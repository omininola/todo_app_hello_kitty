import { PropsWithChildren } from 'react'
import { Text as ReactText, StyleSheet } from 'react-native'

export default function Text({
  children
}: PropsWithChildren
) {
  return <ReactText style={styles.text}>{children}</ReactText>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "white"
  }
})