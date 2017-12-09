"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var uuid = require("uuid/v1");
/*
- Pull all markets from db
- Request each market endpoint for a ticker snapshot
- Add db entry for market ticker snapshot
- wait a certain amount of time
- repeat process
*/
var TickerRequester = /** @class */ (function () {
    function TickerRequester(endpoint_url, responseHandler) {
        this.endpoint_url = endpoint_url;
        this.isRequesting = false;
        this.lastRequestTimestamp = 0;
        this.responseHandler = responseHandler;
    }
    TickerRequester.prototype.setRequesting = function () {
        this.isRequesting = true;
    };
    TickerRequester.prototype.doneRequesting = function () {
        this.isRequesting = false;
        this.resetTime();
    };
    TickerRequester.prototype.currentlyRequesting = function () {
        return this.isRequesting;
    };
    TickerRequester.prototype.timeSinceRequest = function () {
        return Date.now() - this.lastRequestTimestamp;
    };
    TickerRequester.prototype.resetTime = function () {
        this.lastRequestTimestamp = Date.now();
    };
    TickerRequester.prototype.getEndpoint = function () {
        return this.endpoint_url;
    };
    return TickerRequester;
}());
var TickerManager = /** @class */ (function () {
    function TickerManager() {
        this.requesters = [];
    }
    TickerManager.prototype.addEndpoint = function (tickerRequester) {
        this.requesters.push(tickerRequester);
    };
    TickerManager.prototype.removeEndpoint = function (endpoint_url) {
        this.requesters = this.requesters.filter(function (requester) { return requester.getEndpoint() !== endpoint_url; });
    };
    TickerManager.prototype.getAll = function () {
        return this.requesters;
    };
    TickerManager.prototype.clearAll = function () {
        this.requesters = [];
    };
    return TickerManager;
}());
var TickerRunner = /** @class */ (function () {
    function TickerRunner(manager, requestRepeatInterval, maxRequests) {
        if (requestRepeatInterval === void 0) { requestRepeatInterval = 1500; }
        if (maxRequests === void 0) { maxRequests = 20; }
        this.manager = manager;
        this.maxConcurrentRequests = maxRequests;
        this.requestRepeatInterval = requestRepeatInterval;
        this.activeRequests = new Map();
    }
    TickerRunner.prototype.releaseRequest = function (requestUuid) {
        var tickerRequester = this.activeRequests.get(requestUuid);
        tickerRequester.doneRequesting();
        this.activeRequests["delete"](requestUuid);
    };
    TickerRunner.prototype.openRequest = function (tickerRequester) {
        var id = uuid();
        tickerRequester.setRequesting();
        this.activeRequests.set(id, tickerRequester);
        return id;
    };
    TickerRunner.prototype.getStaleRequester = function (minTime) {
        var requesters = this.manager.getAll();
        return requesters.reduce(function (oldest, current) {
            // Don't check requests in mid-flight or requests that haven't surpassed the minimum time frame
            var currentTime = current.timeSinceRequest();
            if (current.currentlyRequesting() || currentTime < minTime) {
                return oldest;
            }
            if (!oldest)
                return current;
            if (currentTime > oldest.timeSinceRequest()) {
                return current;
            }
            return oldest;
        }, undefined);
    };
    TickerRunner.prototype.makeRequest = function (tickerRequester) {
        return __awaiter(this, void 0, void 0, function () {
            var id, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.openRequest(tickerRequester);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, axios_1["default"].get(tickerRequester.getEndpoint())];
                    case 2:
                        data = (_a.sent()).data;
                        tickerRequester.responseHandler(data);
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1, "Error requesting");
                        return [3 /*break*/, 5];
                    case 4:
                        this.releaseRequest(id);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TickerRunner.prototype.start = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.activeRequests.size < _this.maxConcurrentRequests) {
                var staleRequester = _this.getStaleRequester(_this.requestRepeatInterval);
                if (staleRequester) {
                    _this.makeRequest(staleRequester);
                }
            }
            _this.start();
        }, 0);
    };
    return TickerRunner;
}());
function runner() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var tickerManager, cb, tickerRunner;
        return __generator(this, function (_a) {
            tickerManager = new TickerManager();
            cb = new TickerRequester("https://api.gdax.com/products/BTC-USD/ticker", function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(data);
                    return [2 /*return*/];
                });
            }); });
            tickerManager.addEndpoint(cb);
            tickerRunner = new TickerRunner(tickerManager);
            tickerRunner.start();
            return [2 /*return*/];
        });
    });
}
runner();
