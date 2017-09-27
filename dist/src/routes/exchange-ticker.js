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
const exchange_ticker_1 = require("../db/models/exchange-ticker");
const router = express_1.Router();
router.get("/exchange-ticker", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const results = yield exchange_ticker_1.default.read();
        res.json(results.map((result) => result.fields()));
    }
    catch (e) {
        console.log(e);
    }
}));
exports.default = router;
//# sourceMappingURL=exchange-ticker.js.map