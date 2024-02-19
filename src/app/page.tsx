// Components
import Form from "./components/Form";
import Tasks from "./components/Tasks";

// Utilities
import { fetchAllTasks } from "./utils/fetchAllTasks";

// Types
import { Task } from "./utils/types";

export default async function Home() {
  const tasks: Task[] = await fetchAllTasks()
  return (
    <div className="p-8">
      <h1>Aurora's To-do App</h1>
      <Form />
      <Tasks tasks={tasks}/>
    </div>
  );
}
