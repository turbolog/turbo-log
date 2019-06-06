SELECT users.username, users.image, comment.comment, comment.date  FROM comment 
JOIN users ON users.user_id = comment.user_id
WHERE post_id = $1