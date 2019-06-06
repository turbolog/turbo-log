INSERT INTO comment ( user_id, post_id, comment )
VALUES ($1, $2, $3);

SELECT users.username, users.image, comment.comment, comment.date  FROM comment 
JOIN users ON users.user_id = comment.user_id
WHERE post_id = $2