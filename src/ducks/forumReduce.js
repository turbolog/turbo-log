import axios from "axios"

const initialState = {
    posts: [],
    title: "",
    post: "",
}

const UPDATE = "UPDATE";
const GET_POSTS = "GET_POSTS";
const ADD_POST = "ADD_POST";


export function update(name, value) {
    return {
      type: UPDATE,
      payload: { name, value }
    };
  }
export function getPosts () {
    return {
        type:GET_POSTS,
        payload: axios.get("/api/posts")
    }
}
export function addPost (title, post) {
    return {
        type: ADD_POST,
        payload: axios.post("/api/posts", {title, post})
    }
}

function reducer(state = initialState, action) {
    const {type,payload} = action
    
    switch(type) {
        case UPDATE:
                return {
                  ...state,
                  [payload.name]: payload.value
                };
        case `${GET_POSTS}_FULFILLED`: 
            return {
                ...state,
                posts: payload.data
            }
        case `${ADD_POST}_FULFILLED`: 
            return {
                ...state,
                posts: payload.data
            }
        default: return state
    }
}


export default reducer