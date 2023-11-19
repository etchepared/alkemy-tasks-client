import axios from "axios";

export const GetTasksList = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5248/api/Tareas/GetAllTareas"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
