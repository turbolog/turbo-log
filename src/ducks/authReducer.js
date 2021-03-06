import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  user: "",
  user_id: null,
};

//action types
const UPDATE = "UPDATE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const GET_USER_SESSION = "GET_USER_SESSION";
const LOGOUT = "LOGOUT"
//action creators
export function update(name, value) {
  return {
    type: UPDATE,
    payload: { name, value }
  };
}
export function logout() {
  return {
    type: LOGOUT,
    payload: axios.get(`/auth/logout`)
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/auth/login", { username, password })
  };
}

export function register(firstName, lastName, username, email, password) {
  return {
    type: REGISTER,
    payload: axios.post("/auth/register", {
      firstName,
      lastName,
      username,
      email,
      password
    })
  };
}

export function getUserSession() {
  return {
    type: GET_USER_SESSION,
    payload: axios.get("/auth/user")
  };
}
//reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data.username,
        user_id: action.payload.data.user_id,
        password: ""
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data.username,
        user_id: action.payload.data.user_id,
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      };
    case `${GET_USER_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: action.payload.data.user_id,
        username: action.payload.data.username,
        image: action.payload.data.image
      };
    case `${LOGOUT}_FULFILLED`:
      return {
        ...state,
        user_id: null,
        username: ""
      };
    default:
      return state;
  }
}
