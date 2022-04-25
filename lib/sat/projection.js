"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Projection Class
 * 投影在投影轴上的范围
 */
var Projection = /** @class */ (function () {
    function Projection(min, max) {
        this.min = min;
        this.max = max;
    }
    Projection.Create = function (min, max) {
        return new Projection(min, max);
    };
    /** 判断范围是否重叠 */
    Projection.overlaps = function (pA, pB) {
        return pA.max > pB.min && pB.max > pA.min;
    };
    return Projection;
}());
exports.Projection = Projection;
