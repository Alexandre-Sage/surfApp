export default describe("2) LOGIN ROUTE ERROR", function () {
    require("./wrongPassword.test");
    require("./emptyPassword.test");
    require("./wrongEmail.test");
    require("./emptyEmail.test");
    require("./invalidEmail.test");
});
