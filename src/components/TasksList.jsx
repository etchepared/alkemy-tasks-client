import { useEffect, useState } from "react";
//import axios from "axios";
import { GetTasksList } from "../selectors/GetTasksList";

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    GetTasksList().then((data) => {
      setTasks(data);
    });
  }, []);

  return (
    <div>
      TasksList:
      {tasks &&
        tasks.map((task) => {
          return (
            <div className="tarea" key={task.id}>
              <input type="checkbox" />
              {task.tareaTitle}
            </div>
          );
        })}
    </div>
  );
};
