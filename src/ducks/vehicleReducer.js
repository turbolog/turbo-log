import axios from "axios"

const initialState = {
    garage: [],
    year: null,
    make: "",
    model: "",
    trim: "",
    color: "",
    miles: null,
    vin: "",
    image: ""
}

const UPDATE = "UPDATE";
const ADD_CAR = "ADD_CAR";
const DELETE_CAR = "DELETE_CAR";
const UPDATE_MILES = "UPDATE_MILES";
const GET_CARS = "GET_CARS"

export function update(name, value) {
    return {
      type: UPDATE,
      payload: { name, value }
    };
  }

export function getCars() {
    return{
        type: GET_CARS,
        payload: axios.get("api/vehicles")
    }
}
export function addCar(year,make,model,trim,color,miles,vin,image) {
    return{
        type: ADD_CAR,
        payload: axios.post("api/vehicles" , {year,make,model,trim,color,miles,vin,image})
    }
}
export function deleteCar(vehicle_id) {
    return{
        type: DELETE_CAR,
        payload: axios.delete(`api/vehicles/${vehicle_id}`)
    }
}
export function updateMiles(miles, vehicle_id) {
    return{
        type: UPDATE_MILES,
        payload: axios.put(`api/vehicles/${vehicle_id}`, {miles})
    }
}


function reducer (state = initialState, action ) {
    const {type, payload} = action
    console.log(action)
    switch(type) {
        case UPDATE:
            return {
            ...state,
            [payload.name]: payload.value
            };
        case `${GET_CARS}_FULFILLED`: 
            return {
                ...state,
                garage: payload.data
            }
        case `${ADD_CAR}_FULFILLED`: 
            return {
                ...state,
                garage: payload.data
            }
        case `${DELETE_CAR}_FULFILLED`: 
            return {
                ...state,
                garage: payload.data
            }
        case `${UPDATE_MILES}_FULFILLED`: 
            return {
                ...state,
                garage: payload.data
            }
        default: return state
    }
}

export default reducer