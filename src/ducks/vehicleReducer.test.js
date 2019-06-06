const {
    updateVehicle,
    getCars,
    addCar,
    deleteCar,
    updateMiles
  } = require("./vehicleReducer");





describe("vehicle Reducer functions return corresponding action type", () => {
    test("updateVehicle() returns the right Type", () => {
      expect(updateVehicle().type).toEqual("UPDATE_VEHICLE");
    });
    test("getCars() returns the right Type", () => {
      expect(getCars().type).toEqual("GET_CARS");
    });
    test("addCar() returns the right Type", () => {
      expect(addCar().type).toEqual("ADD_CAR");
    });
    test("deleteCar() returns the right Type", () => {
      expect(deleteCar().type).toEqual("DELETE_CAR");
    });
    test("updateMiles() returns the right Type", () => {
      expect(updateMiles().type).toEqual("UPDATE_MILES");
    });
  });