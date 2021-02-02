import axios from "axios";
import { setFiles, addFile, deleteFileAction } from "../reducers/fileReducer";

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
      console.log("file ACTION AXIOS getFiles", response);
      dispatch(setFiles(response.data));
    } catch (error) {
      console.log(error.response.data.message);
      console.log(error.response.data.errors);
      console.log("FILE Error - getFiles", error.response);
      // alert(error.response.data.mesage)
    }
  };
};

export const createDir = (dirId, name) => {
  // асинхронная функция, которая пареметром принимает dispatch
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/files",
        {
          name,
          parent: dirId,
          type: "dir",
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("file ACTION AXIOS createDir", response);
      dispatch(addFile(response.data));
    } catch (error) {
      // console.log(error.response.data.message);
      // console.log(error.response.data.errors);
      console.log("FILE Error - createDir", error.response);
      // alert(error.response.data.mesage)
    }
  };
};

export const uploadFile = (file, dirId) => {
  // асинхронная функция, которая пареметром принимает dispatch
  return async (dispatch) => {
    try {
      const formData = new FormData();

      formData.append("file", file);
      if (dirId) {
        formData.append("parent", dirId);
      }

      const response = await axios.post(
        "http://localhost:5000/api/files/upload",
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          onUploadProgress: (progressEvent) => {
            const totalLength = progressEvent.lengthComputable
              ? progressEvent.total
              : progressEvent.target.getResponseHeader("content-length") ||
                progressEvent.target.getResponseHeader(
                  "x-decompressed-content-length"
                );
            console.log("total", totalLength);
            if (totalLength) {
              let progress = Math.round(
                (progressEvent.loaded * 100) / totalLength
              );
              console.log(progress);
            }
          },
        }
      );
      console.log("file ACTION AXIOS uploadFile", response);
      dispatch(addFile(response.data));
    } catch (error) {
      // console.log(error.response.data.message);
      // console.log(error.response.data.errors);
      console.log("FILE Error - uploadFile", error.response);
      // alert(error.response.data.mesage)
    }
  };
};


export async function downloadFile(file) {
  const response = await fetch(`http://localhost:5000/api/files/download?id=${file._id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })

  if (response.status === 200) {
    // blob подобный физическому файлу объект, его мы получаем из ответа от сервера
    const blob = await response.blob()
    // из blob создаем url
    const downloadUrl = window.URL.createObjectURL(blob)
    // создаем невидимую ссылку
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
}
  

export const deleteFile = (file) => {
  // асинхронная функция, которая пареметром принимает dispatch
  return async (dispatch) => {
    try {

      const response = await axios.delete(`http://localhost:5000/api/files?id=${file._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })

      console.log("file ACTION AXIOS deleteFile", response);
      dispatch(deleteFileAction(file._id));
      alert.response.data.message()
    } catch (error) {
      // console.log(error.response.data.message);
      // console.log(error.response.data.errors);
      console.log("FILE Error - deleteFile", error.response);
      // alert(error.response.data.mesage)
    }
  };
};
    
