import axios from "axios";
import { setUser } from '../reducers/userReducer'

export const registration = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      email,
      password,
    });
    alert(response.data.message)
  } catch (error) {
    console.log(error.response.data.message)
    console.log("USER Error", error)
    alert(error.response.data.message)
  }
};

export const login = (email, password) => {

  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log("Login", response)
      dispatch(setUser(response.data.user))

      localStorage.setItem('token', response.data.token)

      console.log("Login", response.data)
    } catch (error) {
      console.log(error.response.data.message)
      console.log(error.response.data.errors)
      console.log("USER Error", error.response)
      // alert(error.response.data.message)
    }
  }

  
};

export const auth = () => {

  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/auth', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      console.log("Login", response)
      dispatch(setUser(response.data.user))

      localStorage.setItem('token', response.data.token)

      console.log("Login", response.data)
    } catch (error) {
      localStorage.removeItem('token')
      console.log("Auth Error: data.message: ", error.response.data.message)
      // console.log("Auth Error: data.errors: ", error.response.data.errors)
      console.log("Auth Error: response", error.response)
      // alert(error.response.data.message)
    }
  }

  
};
