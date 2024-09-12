"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const routers_1 = require("./routers");
const common_1 = require("../common");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    optionsSuccessStatus: 200
}));
app.set('trust proxy', true);
app.use((0, body_parser_1.urlencoded)({
    extended: false
}));
app.use((0, body_parser_1.json)());
app.use((0, cookie_session_1.default)({
    signed: false,
    secure: false,
}));
app.use(common_1.currentUser);
app.use(routers_1.signinRouter);
app.use(routers_1.signupRouter);
app.use(routers_1.currentUserRouter);
app.use(routers_1.signoutRouter);
app.use(common_1.requireAuth, routers_1.newPostRouter);
app.use(common_1.requireAuth, routers_1.deletePostRouter);
app.use(common_1.requireAuth, routers_1.updatePostRouter);
app.use(routers_1.showPostRouter);
app.use(common_1.requireAuth, routers_1.newCommentRouter);
app.use(common_1.requireAuth, routers_1.deleteCommentRouter);
app.all('*', (req, res, next) => {
    next(new common_1.NotFoundError());
});
app.use(common_1.errorHandler);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.MONGO_URI)
        throw new Error('MONGO_URI is required!');
    if (!process.env.JWT_KEY)
        throw new Error('JWT_KEY is required!');
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URI);
    }
    catch (err) {
        throw new Error('database error!');
    }
    app.listen(8080, () => {
        console.log('server is up and ruinning on port 8080');
    });
});
start();
