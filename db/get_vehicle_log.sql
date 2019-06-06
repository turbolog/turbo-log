SELECT report.report_id,report.vehicle_id,report.shop,report.image, report.description,report.shop_name,report.miles,report.date,report.summary, report.part_number, report.part_description FROM report
JOIN vehicle ON report.vehicle_id = vehicle.vehicle_id
WHERE report.vehicle_id = $1
ORDER BY report.date DESC