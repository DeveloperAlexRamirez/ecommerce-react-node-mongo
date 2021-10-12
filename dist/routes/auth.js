"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req = express_1.request, res = express_1.response) => {
    res.send({
        msg: 'Hello world from auth.ts'
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map