const {
  update,
  register,
  login,
  logout,
  getUserSession
} = require("./authReducer");


//David's Unit Tests
describe("authReducer functions return corresponding action type", () => {
  test("login() returns the right Type", () => {
    expect(login().type).toEqual("LOGIN");
  });
  test("update() returns the right Type", () => {
    expect(update().type).toEqual("UPDATE");
  });
  test("logout() returns the right Type", () => {
    expect(logout().type).toEqual("LOGOUT");
  });
  test("register() returns the right Type", () => {
    expect(register().type).toEqual("REGISTER");
  });
  test("getUserSession() returns the right Type", () => {
    expect(getUserSession().type).toEqual("GET_USER_SESSION");
  });
});

//David's E2E Tests
