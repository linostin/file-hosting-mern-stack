import axios from "axios";
import { setFiles, addFile } from "../reducers/fileReducer";

export const getFiles = (dirId) => {
  // асинхронная функция, которая пареметром принимает dispatch
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/files${dirId ? "?parent=" + dirId : ""}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("file ACTION AXIOS getFiles", response)
      dispatch(setFiles(response.data));
    } catch (error) {
      console.log(error.response.data.message);
      console.log(error.response.data.errors);
      console.log("FILE Error", error.response);
      // alert(error.response.data.mesage)
    }
  };
};


export const createDir = (dirId, name) => {
  // асинхронная функция, которая пареметром принимает dispatch
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/files', 
        {
          name,
          parent: dirId,
          type: 'dir'
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("file ACTION AXIOS createDir", response)
      dispatch(addFile(response.data));
    } catch (error) {
      // console.log(error.response.data.message);
      // console.log(error.response.data.errors);
      console.log("FILE Error", error.response);
      // alert(error.response.data.mesage)
    }
  };
};
