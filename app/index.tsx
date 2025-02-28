import Container from "@/components/Container";
import Form from "@/components/Form";
import Subtitle from "@/components/Subtitle";
import TaskList from "@/components/TaskList";
import Title from "@/components/Title";
import { Task } from "@/types";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <Container>
      <Title>TODO APP 📝</Title>
      <Subtitle>Um aplicativo que vai te ajudar nas suas tarefas!</Subtitle>

      <Form setTasks={setTasks} />

      <TaskList tasks={tasks} setTasks={setTasks}/>

      <StatusBar style="auto" />
    </Container>
  );
}
