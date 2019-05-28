const bcrypt = require("bcryptjs")

const register = async (request,response) => {
    const {username , password , firstName, lastName, email} = request.body;
    const db = request.app.get("db");
    let user = await db.get_user(username).catch(error => console.log(error))

    if (user[0]) {
        response.status(403).json("Username already taken")
    } else {
        let hash = await bcrypt.hash(password,10)
        const results = await db.add_user([username,hash,email,firstName,lastName]).catch(error => console.log(error))
        console.log(results)
        request.session.user = {
            username,
            user_id: results[0].user_id
        }
        response.json(request.session.user)
    }
}
const login = async (request,response) => {
    const db = request.app.get("db")
    const {username, password} = request.body
    const user = await db.get_user(username).catch(error => {
        console.log(error);
        response.status(401).json("Something went wrong")
    })
    if(!user[0]) {
        response.status(401).json("Incorrect username or password")
    } else {
        const authenticated = await bcrypt.compareSync(password, user[0].password)
        if (!authenticated) {
          response.status(401).json("Incorrect username or password") 
        } else {
            request.session.user = {
                id: user[0].user_id,
                username: username
            }
            response.json(request.session.user)
        }
    }

}


module.exports = {
    register,
    login
}