import { useEffect, useState } from "react";
//import axios from "axios";
import { GetTasksList } from "../selectors/GetTasksList";
import axios from "axios";

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    GetTasksList().then((data) => {
      setTasks(data);
    });
  }, []);

  async function onCheckboxClick(e) {
    //buscar la task donde el id es igual al id del click y setear en true
    let clickedTask = tasks.filter((t) => t.id == e.target.value);
    const { id, tareaTitle, tareaDescription } = clickedTask[0];
    clickedTask = {
      tareaTitle: tareaTitle,
      tareaDescription: tareaDescription,
      isCompleted: true,
    };

    try {
      await axios.put(
        `http://localhost:5248/api/Tareas/UpdateTarea?id=${id}`,
        clickedTask
      );
      location.reload();
    } catch (error) {
      console.log("No se actualizó la tarea.");
    }
  }

  return (
    <div>
      TasksList:
      {tasks &&
        tasks.map((task) => {
          return (
            <div className="tarea" key={task.id}>
              <input
                type="checkbox"
                value={task.id}
                onClick={onCheckboxClick}
              />
              {task.tareaTitle}
            </div>
          );
        })}
    </div>
  );
};
