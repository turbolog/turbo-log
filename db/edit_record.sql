UPDATE report 
SET 
shop = $2,
shop_name = $3, 
date = $4, 
miles = $5, 
summary = $6
WHERE report_id = $1;


SELECT report.report_id,report.vehicle_id,report.shop,report.shop_name,report.miles,report.date,report.summary FROM report
JOIN vehicle ON report.vehicle_id = vehicle.vehicle_id
WHERE user_id = 1
ORDER BY report.vehicle_id, report.date DESC