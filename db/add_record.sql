INSERT INTO report ( vehicle_id,shop,shop_name,date,miles,summary )
VALUES ($1,$2,$3,$4,$5,$6);

SELECT * FROM report
JOIN vehicle ON report.vehicle_id = vehicle.vehicle_id
WHERE user_id = $7
ORDER BY report.vehicle_id, report.date DESC