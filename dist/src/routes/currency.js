"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currency_1 = require("../db/models/currency");
const router = express_1.Router();
router.get("/currency", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const results = yield currency_1.default.read();
    res.json(results.map((result) => result.fields()));
}));
exports.default = router;
//# sourceMappingURL=currency.js.map