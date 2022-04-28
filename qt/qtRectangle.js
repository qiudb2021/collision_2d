"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qtRectangle = /** @class */ (function () {
    function qtRectangle(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    qtRectangle.Create = function (x, y, w, h) {
        return new qtRectangle(x, y, w, h);
    };
    return qtRectangle;
}());
exports.qtRectangle = qtRectangle;
