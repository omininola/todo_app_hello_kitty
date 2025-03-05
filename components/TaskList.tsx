import { FlatList, StyleSheet, View } from "react-native";
import Text from "./Text";
import { Task } from "@/types";
import Button from "./Button";
import { AntDesign } from "@expo/vector-icons";

export default function TaskList({
  tasks,
  setTasks
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) {
  return (
    <FlatList
      style={styles.listContainer}
      data={tasks}
      renderItem={(task) => {
        return (
          <View style={styles.listItem}>
            <View>
              <Text>{task.item.title}</Text>
              <Text>{task.item.subtitle}</Text>
            </View>

            {!task.item.done &&
              <Button
                onPress={() => setTasks((tasks) => tasks.map(taskMap => {
                  if (taskMap.id !== task.item.id) return taskMap;
                  else taskMap.done = true;
                  return taskMap;
                }))}
              >
                Check
              </Button>
            }

            {task.item.done &&
              <AntDesign name="check" size={32} color="hsl(319 100% 70%)" />
            }
          </View>
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 4,
    borderColor: "hsl(319 100% 75%)",
    borderRadius: 12,
    padding: 16,
    width: "100%"
  },

  listItem: {
    borderWidth: 4,
    borderColor: "hsl(319 100% 80%)",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 16
  },
})