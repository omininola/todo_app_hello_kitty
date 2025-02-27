import { FlatList, StyleSheet, View } from "react-native";
import Text from "./Text";
import { Task } from "@/types";
import Button from "./Button";

export default function TaskList({
  tasks
}: {
  tasks: Task[]
}) {
  return (
    <FlatList
      style={styles.listContainer}
      data={tasks}
      renderItem={(task) => (
        <View style={styles.listItem}>
          <View>
            <Text>{task.item.title}</Text>
            <Text>{task.item.subtitle}</Text>
          </View>

          <Button>Check</Button>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 4,
    borderColor: "#FBF3B9",
    borderRadius: 12,
    padding: 16,
    width: "100%"
  },

  listItem: {
    borderWidth: 4,
    borderColor: "#FFDCCC",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 16
  }
})