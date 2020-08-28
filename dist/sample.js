"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var power = function (n) {
    if (typeof n === "undefined" || n === null) {
        return undefined;
    }
    if (typeof n !== "number") {
        return undefined;
    }
    return Math.pow(n, 2);
};
exports.default = power;
