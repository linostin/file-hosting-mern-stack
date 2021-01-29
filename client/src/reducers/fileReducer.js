// TODO переделать логику редюсеров на duck

const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";
const ADD_FILE = "ADD_FILE";

const defaultState = {
  files: [],
  currentDir: null,
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
