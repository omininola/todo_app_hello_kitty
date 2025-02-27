import { StyleSheet, View } from "react-native";
import Input from "./Input";
import Button from "./Button";
import { Task } from "@/types";
import { useState } from "react";
import Text from "./Text";

export default function Form({
  setTasks
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) {
  const [task, setTask] = useState<Task>({
    id: 0,
    title: "Título da tarefa",
    subtitle: "Subtitulo da tarefa",
    done: false
  });

  return (
    <View style={styles.form}>
      <Input
        onChangeText={(title) => {setTask((task) => ({...task, title}))}}
        placeholder="Título da tarefa"
        value={task.title}
      />

      <Input
        onChangeText={(subtitle) => {setTask((task) => ({...task, subtitle}))}}
        placeholder="Descrição da tarefa"
        value={task.subtitle}
      />

      <Button
        onPress={() => setTasks((tasks) => ([...tasks, task]))}
      >
        Adicionar Tarefa
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    gap: 24,

    marginVertical: 24,
    
    width: "80%",
  }
})