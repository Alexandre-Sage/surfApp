export default describe("API TEST SUITE", function () {
    require("./signUp/signUpHighOrder.test");
    require("./login/loginHighOrder.test");
    require("./userProfil/userProfil.test");
    require("./imageUpload/uploadHighOrder.test");
    require("./spot/spotHighOrder.test");
    require("./session/sessionHighOrder.test");
})
