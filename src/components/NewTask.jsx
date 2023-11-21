import axios from "axios";
import { useState } from "react";

export const NewTask = () => {
  const [tarea, setTarea] = useState({
    tareaTitle: "",
    tareaDescription: "",
    isCompleted: false,
  });
  console.log("tarea", tarea);

  const onTareaChange = (e) => {
    setTarea({ ...tarea, [e.target.id]: e.target.value });
  };

  async function onFormSubmit() {
    try {
      await axios.post("http://localhost:5248/api/Tareas/PostTarea", tarea);
    } catch (error) {
      console.log("No se creó la tarea.");
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      NewTask:
      <hr></hr>
      <label>Título: </label>
      <input
        type="text"
        id="tareaTitle"
        placeholder="Nombre de la tarea"
        onChange={onTareaChange}
      />
      <hr></hr>
      <label>Descripción: </label>
      <input
        type="text"
        id="tareaDescription"
        placeholder="Descripción de la tarea"
        onChange={onTareaChange}
      />
      <hr></hr>
      <button type="submit">Agregar nueva tarea</button>
    </form>
  );
};
