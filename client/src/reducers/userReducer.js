const SET_USER= "SET_USER"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {

    case SET_USER:
      console.log("SET_USER action.payload: ", action.payload)
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      }

    case LOGOUT: 
      console.log("LOGOUT action.payload: ", action.payload)
      localStorage.removeItem('token')
      return {...state,
        currentUser: {},
        isAuth: false
      }

    default: 
      return state
  }
}


export const setUser = user => ({
  type: SET_USER,
  payload: user
})

export const logout = () => ({
  type: LOGOUT
})