const getRecords = async (request, response) => {
  const db = request.app.get("db");
  const { user_id } = request.session.user;

  const records = await db.get_all_user_records(user_id);

  response.json(records);
};
const addRecord = async (request, response) => {
  const db = request.app.get("db");
  const { vehicle_id, shop, shop_name, date, miles, summary } = request.body;
  const { user_id } = request.session.user;
  const records = await db.add_record([
    vehicle_id,
    shop,
    shop_name,
    date,
    miles,
    summary,
    user_id
  ]);
  console.log(records);
  response.json(records);
};
const updateRecord = async (request, response) => {
  const db = request.app.get("db");
  const { shop, shop_name, date, miles, summary } = request.body;
  const { report_id } = request.params;
  const { user_id } = request.session.user;

  const records = await db.edit_record([
    report_id,
    shop,
    shop_name,
    date,
    miles,
    summary,
    user_id
  ]);

  response.json(records);
};
const deleteRecord = async (request, response) => {
  const db = request.app.get("db");
  const { report_id } = request.params;

  const records = await db.delete_record(report_id);

  response.json(records);
};
const getVehicleRecord = async (request, response) => {
  const db = request.app.get("db");
  const { vehicle_id } = request.params;
  console.log("hit");
  const records = await db.get_vehicle_log(vehicle_id);

  response.json(records);
};
module.exports = {
  getRecords,
  addRecord,
  updateRecord,
  deleteRecord,
  getVehicleRecord
};
