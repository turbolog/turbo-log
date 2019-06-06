SELECT report.report_id,report.vehicle_id,report.shop,report.shop_name,report.miles,report.date,report.summary, report.description FROM report
JOIN vehicle ON report.vehicle_id = vehicle.vehicle_id
WHERE report.vehicle_id = $1
ORDER BY report.date DESC