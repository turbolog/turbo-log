INSERT INTO vehicle ( user_id,year, make, model, trim, color, miles,vin,image )
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);

SELECT * FROM vehicle
WHERE user_id = $1;