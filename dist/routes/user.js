"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = express_1.Router();
router.get('/', user_1.userGet);
router.post('/', user_1.userPost);
exports.default = router;
//# sourceMappingURL=user.js.map