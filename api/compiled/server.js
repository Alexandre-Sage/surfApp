"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
/*ROUTES*/
const signUp_1 = __importDefault(require("./routes/signUp/signUp"));
const login_1 = __importDefault(require("./routes/login/login"));
const csrf_1 = __importDefault(require("./routes/csrf/csrf"));
const userProfil_1 = __importDefault(require("./routes/userProfil/userProfil"));
const spot_1 = __importDefault(require("./routes/spot/spot"));
const session_1 = __importDefault(require("./routes/session/session"));
const server = (0, express_1.default)();
dotenv_1.default.config({ path: path_1.default.resolve(".env") });
;
/*server.locals.db=connect(`${process.env.MONGO_ATLAS}`,{
    autoIndex: true,
})*/
server.use((0, cors_1.default)({
    origin: /*`${process.env.HOSTTWO}${process.env.PORT}`*/ "http://localhost:19006",
    methods: ["GET", "POST"],
    credentials: true
}));
server.set("trust proxy", 1);
server.use(body_parser_1.default.urlencoded({ extended: true, limit: "50M" }));
//server.use(express.static(path.join(__dirname, "src")));
server.use(express_1.default.static(`${process.cwd()}/src`));
process.env.NODE_ENV === "development" ? server.use((0, morgan_1.default)("dev")) : null;
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, cookie_parser_1.default)("secret"));
server.use((0, express_session_1.default)({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: "none",
        secure: false,
    },
}));
server.use("/signUp", signUp_1.default);
server.use("/login", login_1.default);
server.use("/csrf", csrf_1.default);
server.use("/userProfil", userProfil_1.default);
server.use("/spot", spot_1.default);
server.use("/session", session_1.default);
const httpServer = http_1.default.createServer(server);
httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on: ${process.env.PORT}`);
});
exports.default = server;
