INSERT INTO report ( vehicle_id,shop,shop_name,description,date,miles,summary )
VALUES ($1,$2,$3,$4,$5,$6,$7);

SELECT * FROM report
JOIN vehicle ON report.vehicle_id = vehicle.vehicle_id
WHERE user_id = $8
ORDER BY report.vehicle_id, report.date DESC