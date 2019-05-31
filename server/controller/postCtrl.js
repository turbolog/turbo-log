const getPosts = async (request, response) => {
    const db = request.app.get("db")
    const posts = await db.get_posts()
    
    response.json(posts)
}
const getUserPosts = async (request, response) => {
    const db = request.app.get("db")
    const { user_id } = request.session.user

    const posts = await db.get_user_post(user_id)
    
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
const getComments = async (request, response) => {
    const db = request.app.get("db")
    const { post_id } = request.params

    const comments = await db.get_comments(post_id)

    response.json(comments)
}
const getFavorites = async (request, response) => {
    const db = request.app.get("db")
    const { user_id } = request.session.user

    const posts = await db.get_favorites(user_id)

    response.json(posts)
}
const addComment = async (request, response) => {
    const db = request.app.get("db")
    const { user_id } = request.session.user
    const { post_id, comment } = request.body

    const comments = await db.add_comment([user_id, post_id, comment])

    response.json(comments)
}
module.exports = {
    getPosts,
    addPost,
    getUserPosts,
    deletePost,
    getComments,
    addComment,
    getFavorites,
}