"use strict";
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const video_1 = __importDefault(require("../routes/video"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || '5000';
        this.videoPath = '/videos';
        this.connectionToDB();
        this.middlewares();
        this.routes();
    }
    connectionToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.videoPath, video_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port: ', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map