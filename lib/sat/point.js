"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.Create = function (x, y) {
        return new Point(x, y);
    };
    return Point;
}());
exports.Point = Point;
