const getUserGarage = async (request, response) => {
    const db = request.app.get("db");
    const {user_id} = request.session.user;

    const garage = await db.get_user_garage(user_id)

    response.json(garage)
}

module.exports = {
    getUserGarage,

}