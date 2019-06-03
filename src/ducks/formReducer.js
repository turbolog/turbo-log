import axios from "axios";

const initialState = {
  vehicle_id: null,
  shop: false,
  date: "",
  miles: "",
  summary: "",
  shop_name: null
};
//action types
const UPDATE_FORM = "UPDATE_FORM";
const SUBMIT_DIY_RECORD = "SUBMIT_DIY_RECORD";
const GET_ID = "GET_ID";
//action creators
export function updateForm(name, value) {
  return {
    type: UPDATE_FORM,
    payload: { name, value }
  };
}
export function submitDIYRecord(
  vehicle_id,
  shop,
  date,
  miles,
  summary,
  shop_name
) {
  return {
    type: SUBMIT_DIY_RECORD,
    payload: axios.post("/api/records", {
      vehicle_id,
      shop,
      date,
      miles,
      summary,
      shop_name
    })
  };
}

export function getID(vehicle_id) {
  return {
    type: GET_ID,
    payload: vehicle_id
  };
}

//reducer
export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case `${SUBMIT_DIY_RECORD}_FULFILLED`:
      return {
        ...state,
        vehicle_id: console.log(action.payload),
        shop: false,
        date: "",
        miles: "",
        summary: "",
        shop_name: null
      };
    case GET_ID:
      return {
        ...state,
        vehicle_id: action.payload
      };
    default:
      return state;
  }
}
