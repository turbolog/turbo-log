INSERT INTO users (username, password, email, first_name, last_name)
VALUES ($1,$2,$3,$4,$5);


SELECT * FROM users
WHERE username = $1;