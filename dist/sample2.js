"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqrt = function (n) {
    if (typeof n === "undefined" || n === null) {
        return undefined;
    }
    if (typeof n !== "number") {
        return undefined;
    }
    return Math.sqrt(n);
};
exports.default = sqrt;
