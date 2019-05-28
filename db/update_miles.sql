UPDATE vehicle
SET miles = $1
WHERE vehicle_id = $2;

SELECT * FROM vehicle
WHERE vehicle_id = $2