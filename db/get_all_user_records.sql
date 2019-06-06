SELECT report.report_id,report.vehicle_id,report.shop,report.shop_name,report.miles,report.date,report.summary, vehicle.image,vehicle.make,vehicle.model,report.description, report.image as recipt FROM report
JOIN vehicle ON report.vehicle_id = vehicle.vehicle_id
WHERE user_id = 1
ORDER BY report.date DESC