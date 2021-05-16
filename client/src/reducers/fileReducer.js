// TODO переделать логику редюсеров на duck

const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";
const ADD_FILE = "ADD_FILE";
const PUSH_TO_STACK = "PUSH_TO_STACK"
const DELETE_FILE = "DELETE_FILE";
const PUSH_TO_FOLDER_PATH = "PUSH_TO_FOLDER_PATH"
const DELETE_FROM_FOLDER_PATH = "DELETE_FROM_FOLDER_PATH"


const defaultState = {
  files: [],
  currentDir: null,
  dirStack: [],
  folderPath : [],
};



export default function fileReducer(state = defaultState, action) {

  // ? возможно добавить immer.js

  switch (action.type) {
    case SET_FILES:
      console.log("REDUCER: SET_FILES action.payload: ", action.payload);
      return {
        ...state,
        files: action.payload,
      };

    case SET_CURRENT_DIR:
      console.log("REDUCER: SET_CURRENT_DIR action.payload: ", action.payload);
      return {
        ...state,
        currentDir: action.payload,
      };

    case ADD_FILE:
      console.log("REDUCER: ADD_FILE action.payload: ", action.payload);
      return {
        ...state,
        files: [...state.files, action.payload],
      };
      
    case PUSH_TO_STACK:
      console.log("REDUCER: PUSH_TO_STACK action.payload: ", action.payload);
      return {
        ...state,
        dirStack: [...state.dirStack, action.payload],
      }

      case DELETE_FILE:
      console.log("REDUCER: DELETE_FILE action.payload: ", action.payload);
      return {
        ...state,
        files: [...state.files.filter(file => file._id !== action.payload)],
      }

      case PUSH_TO_FOLDER_PATH:
        console.log("REDUCER: PUSH_TO_FOLDER_PATH action.payload: ", action.payload);
        return {
          ...state,
          folderPath: [...state.folderPath, action.payload],
        }

        case DELETE_FROM_FOLDER_PATH:
          console.log("REDUCER: DELETE_FROM_FOLDER_PATH action.payload: ", action.payload);
          return {
            ...state,
            folderPath: [...state.folderPath].slice(0,-1),
          }

    default:
      return state;
  }
}

export const setFiles = (files) => ({
  type: SET_FILES,
  payload: files,
});

export const setCurrentDir = (dir) => ({
  type: SET_CURRENT_DIR,
  payload: dir,
});

export const addFile = (file) => ({
  type: ADD_FILE,
  payload: file,
});

export const pushToStack = (dir) => ({
  type: PUSH_TO_STACK,
  payload: dir,
});

export const deleteFileAction = (dirId) => ({
  type: DELETE_FILE,
  payload: dirId,
});

export const pushToFolderPath = (dirName) => ({
  type: PUSH_TO_FOLDER_PATH,
  payload: dirName,
});

export const deleteFromFolderPath = () => ({
  type: DELETE_FROM_FOLDER_PATH,
  payload: null,
});