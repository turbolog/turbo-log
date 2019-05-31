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
//action creators
export function updateForm(name, value) {
  return {
    type: UPDATE_FORM,
    payload: { name, value }
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
    default:
      return state;
  }
}
