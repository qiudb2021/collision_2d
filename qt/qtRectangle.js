"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shap_1 = require("../lib/shap/shap");
var marco_1 = require("../lib/marco");
var view_1 = require("../lib/view");
var qtRectangle = /** @class */ (function (_super) {
    __extends(qtRectangle, _super);
    function qtRectangle(x, y, w, h) {
        var _this = _super.call(this, marco_1.ShapType.QTRectangle) || this;
        _this.x = x;
        _this.y = y;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    qtRectangle.Create = function (x, y, w, h) {
        return new qtRectangle(x, y, w, h);
    };
    qtRectangle.prototype.view = function () {
        view_1.View.drawRectangle(this.x, this.y, this.w, this.h, marco_1.COLORS.Yellow, marco_1.ViewType.Outline);
    };
    return qtRectangle;
}(shap_1.Shap));
exports.qtRectangle = qtRectangle;
