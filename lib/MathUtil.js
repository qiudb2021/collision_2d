"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.rand = function (min, max) {
        if (min > max) {
            var tmp = min;
            max = tmp;
            min = max;
        }
        else if (min == max) {
            return min;
        }
        return Math.floor((max - min) * Math.random() + min + 0.5);
    };
    return MathUtil;
}());
exports.MathUtil = MathUtil;
