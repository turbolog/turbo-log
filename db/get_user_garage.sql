SELECT * FROM vehicle
WHERE user_id = $1
ORDER BY vehicle_id;