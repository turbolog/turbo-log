const getPosts = async (request, response) => {
    const db = request.app.get("db")
    const posts = await db.get_posts()
    
    response.json(posts)
}
const addPost = async (request, response) => {
    const db = request.app.get("db")
    const { title, post } = request.body
    const { user_id } = request.session.user 

    const result = await db.add_post([user_id, title, post])

    response.json(result)
}
const  deletePost = async (request, response) => {
    const db = request.app.get("db") 
    const { post_id } = request.params

    const post = await db.delete_post(post_id)

    response.json(post)
}
module.exports = {
    getPosts,
    addPost,
    deletePost
}