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
var shap_1 = require("./shap");
var marco_1 = require("../marco");
var view_1 = require("../view");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(lTop, rButtom) {
        var _this = _super.call(this, marco_1.ShapType.Rectangle) || this;
        _this.lTop = lTop;
        _this.rButtom = rButtom;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this.rButtom.x - this.lTop.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this.rButtom.y - this.lTop.y;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.Create = function (lTop, rButtom) {
        return new Rectangle(lTop, rButtom);
    };
    Rectangle.prototype.view = function (color, type) {
        if (type === void 0) { type = marco_1.ViewType.Solid; }
        if (type == marco_1.ViewType.Solid) {
            view_1.View.drawRectangle(this.lTop.x, this.rButtom.y - this.height, this.width, this.height, color || marco_1.COLORS.Black);
        }
        else {
            view_1.View.drawLine(this.lTop.x, this.lTop.y, this.lTop.x, this.rButtom.y, color, 1);
            view_1.View.drawLine(this.lTop.x, this.rButtom.y, this.rButtom.x, this.rButtom.y, color, 1);
            view_1.View.drawLine(this.rButtom.x, this.rButtom.y, this.rButtom.x, this.lTop.y, color, 1);
            view_1.View.drawLine(this.lTop.x, this.lTop.y, this.rButtom.x, this.lTop.y, color, 1);
        }
    };
    return Rectangle;
}(shap_1.Shap));
exports.Rectangle = Rectangle;
