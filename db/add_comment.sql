INSERT INTO comment ( user_id, post_id, comment )
VALUES ($1, $2, $3);

SELECT * FROM comment 
WHERE post_id = $2;