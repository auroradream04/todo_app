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
    <div className="px-4 py-8">
      <div className="mb-8 mt-2">
        <h2 className="text-sm"><span className="text-[rgb(150,150,150)]">Hi, </span>Aurora</h2>
        <h3 className="text-lg mt-1">What are you up to today?</h3>
      </div>
      <h1 className="text-3xl font-bold">Tasks</h1>
      <Form />
      <Tasks tasks={tasks} />
    </div>
  );
}
