"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = describe("3) SHOULD RETURN SIGN UP ERRORS", function () {
    require("./dupUsername.test");
    require("./dupEmail.test");
    require("./dupPhone.test");
    require("./invalidMail.test");
    require("./invalidPhone.test");
    require("./missingUserName.test");
    require("./missingPhone.test");
    require("./missingEmail.test");
    require("./missingPassword.test");
    require("./passwordConfirmationError.test");
});
