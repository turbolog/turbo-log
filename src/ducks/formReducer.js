import axios from "axios";

const initialState = {
  vehicle_id: null,
  shop: false,
  description: "",
  date: "",
  miles: "",
  summary: "",
  image: "",
  shop_name: null,
  part_number: null,
  part_description: null,
};
//action types
const UPDATE_FORM = "UPDATE_FORM";
const SUBMIT_DIY_RECORD = "SUBMIT_DIY_RECORD";
const SUBMIT_SHOP_RECORD = "SUBMIT_SHOP_RECORD";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const GET_ID = "GET_ID";
const TOGGLE_SHOP = "TOGGLE_SHOP";
//action creators
export function updateForm(name, value) {
  return {
    type: UPDATE_FORM,
    payload: { name, value }
  };
}
export function updateImage(image) {
  return {
    type: UPDATE_IMAGE,
    payload: image
  };
}

export function submitDIYRecord(vehicle_id, shop, shop_name, date,miles, description, summary, image, part_number, part_description ) {
  console.log(      
    vehicle_id,
    shop,
    shop_name,
    date,
    miles,
    description,
    summary,
    image,
    part_number,
    part_description,)
  return {
    type: SUBMIT_DIY_RECORD,
    payload: axios.post("/api/records", {
      vehicle_id,
      shop,
      shop_name,
      date,
      miles,
      description,
      summary,
      image,
      part_number,
      part_description,
    })
  };
}

export function submitShopRecord(
  vehicle_id,
  shop,
  shop_name,
  date,
  miles,
  description,
  summary,
  image,
  part_number,
  part_description,
) {
  return {
    type: SUBMIT_SHOP_RECORD,
    payload: axios.post("/api/records", {
      vehicle_id,
      shop,
      shop_name,
      date,
      miles,
      description,
      summary,
      image,
      part_number,
      part_description,
    })
  };
}

export function getID(vehicle_id) {
  return {
    type: GET_ID,
    payload: vehicle_id
  };
}

export function toggleShop(shop) {
  return {
    type: TOGGLE_SHOP,
    payload: shop
  };
}

//reducer
export default function formReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case `${SUBMIT_DIY_RECORD}_FULFILLED`:
      return {
        ...state,
        vehicle_id: state.vehicle_id,
        shop: false,
        date: "",
        miles: "",
        summary: "",
        shop_name: null
      };
    case `${SUBMIT_SHOP_RECORD}_FULFILLED`:
      return {
        ...state,
        vehicle_id: state.vehicle_id,
        shop: state.shop,
        date: "",
        miles: "",
        summary: "",
        shop_name: null
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case GET_ID:
      return {
        ...state,
        vehicle_id: action.payload
      };
    case TOGGLE_SHOP:
      return {
        ...state,
        shop: action.payload
      };
    default:
      return state;
  }
}
