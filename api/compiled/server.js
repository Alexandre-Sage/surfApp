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
const login_1 = __importDefault(require("./routes/login"));
const server = (0, express_1.default)();
dotenv_1.default.config({ path: path_1.default.resolve(".env") });
;
server.use((0, cors_1.default)({
    origin: `${process.env.HOST}${process.env.PORT}`,
    methods: ["GET", "POST"],
    credentials: true
}));
server.use(body_parser_1.default.urlencoded({ extended: false }));
process.env.NODE_ENV === "development" ? server.use((0, morgan_1.default)("dev")) : null;
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, cookie_parser_1.default)("secret"));
server.use((0, express_session_1.default)({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        sameSite: "strict"
    },
}));
server.use('/login', login_1.default);
const httpServer = http_1.default.createServer(server);
httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on: ${process.env.PORT}`);
});
exports.default = server;
