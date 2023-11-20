import "./App.css";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

function App() {
  return (
    <>
      <NewTask />
      <hr />
      <TasksList />
    </>
  );
}

export default App;
