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
exports.updateVideo = exports.deleteVideo = exports.postVideo = exports.getVideo = exports.getVideos = void 0;
const express_1 = require("express");
const video_1 = __importDefault(require("../models/video"));
const getVideos = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield video_1.default.find();
        res.json(videos);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getVideos = getVideos;
const getVideo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Desde getVideo',
    });
});
exports.getVideo = getVideo;
const postVideo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Desde postVideo',
    });
});
exports.postVideo = postVideo;
const deleteVideo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Desde deleteVideo',
    });
});
exports.deleteVideo = deleteVideo;
const updateVideo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Desde updateVideo',
    });
});
exports.updateVideo = updateVideo;
//# sourceMappingURL=videos.js.map