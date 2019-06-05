const getUserGarage = async (request, response) => {
    const db = request.app.get("db");
    const {user_id} = request.session.user;

    const garage = await db.get_user_garage(user_id)

    response.json(garage)
}
const updateMiles = async (request, response) => {
    const db = request.app.get("db")
    const { miles } = request.body
    const { vehicle_id } = request.params
    const { user_id } = request.session.user
    
    const updated = await db.update_miles([miles,vehicle_id, user_id])

    response.json(updated)
}
const deleteVehicle = async (request, response) => {
    const db = request.app.get("db")
    const { vehicle_id } = request.params
    const { user_id } = request.session.user

    const results = await db.delete_vehicle([vehicle_id, user_id])

    response.json(results)
}
const addVehicle = async (request, response) => {
    const db = request.app.get("db")
    const { year,make,model,trim,color,miles,vin,image } = request.body
    console.log(request.body)
    const { user_id } = request.session.user 
    const garage = await db.add_vehicle([user_id,year,make,model,trim,color,miles,vin,image])
    
    response.json(garage)
}

module.exports = {
    getUserGarage,
    updateMiles,
    deleteVehicle,
    addVehicle
}