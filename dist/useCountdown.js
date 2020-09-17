"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DEFAULT_OPTIONS = {
    step: 1000,
};
function useCountdown(options) {
    var _a = react_1.default.useState(), timeleft = _a[0], setTimeleft = _a[1];
    var _b = react_1.default.useState(), targetDatetime = _b[0], setTargetDatetime = _b[1];
    var _c = __assign(__assign({}, DEFAULT_OPTIONS), options), step = _c.step, onCount = _c.onCount, onEnd = _c.onEnd;
    var start = function (countAsM) {
        setTimeleft(countAsM);
    };
    var varTimeout = null;
    react_1.default.useEffect(function () {
        return function () { return clearTimeout(varTimeout); };
    }, []);
    react_1.default.useEffect(function () {
        if (timeleft === undefined) {
            return;
        }
        var newTimeleft = timeleft - step;
        if (newTimeleft < 0) {
            setTimeleft(0);
            onEnd === null || onEnd === void 0 ? void 0 : onEnd();
        }
        else {
            onCount === null || onCount === void 0 ? void 0 : onCount(timeleft);
            varTimeout = setTimeout(function () {
                setTimeleft(newTimeleft);
            }, step);
        }
    }, [timeleft]);
    var result = {
        timeleft: timeleft || 0,
        start: start,
    };
    return result;
}
exports.default = useCountdown;
