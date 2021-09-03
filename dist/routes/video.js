"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videos_1 = require("../controllers/videos");
const router = express_1.Router();
router.get('/', videos_1.getVideos);
router.get('/video:id', videos_1.getVideo);
router.post('/', videos_1.postVideo);
router.delete('/:id', videos_1.deleteVideo);
router.put('/:id', videos_1.updateVideo);
exports.default = router;
//# sourceMappingURL=video.js.map