INSERT INTO report ( vehicle_id, shop, shop_name, description, date, miles, summary, part_number, part_description, image )
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);

SELECT * FROM report
JOIN vehicle ON report.vehicle_id = vehicle.vehicle_id
WHERE user_id = $11
ORDER BY report.vehicle_id, report.date DESC