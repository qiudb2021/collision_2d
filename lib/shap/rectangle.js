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
    function Rectangle(leftX, leftY, width, height) {
        var _this = _super.call(this, marco_1.ShapType.Rectangle) || this;
        _this.leftX = leftX;
        _this.leftY = leftY;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.view = function (color, type) {
        if (type === void 0) { type = marco_1.ViewType.Solid; }
        view_1.View.drawRectangle(this.leftX, this.leftY, this.width, this.height, color || marco_1.COLORS.Black);
    };
    return Rectangle;
}(shap_1.Shap));
exports.Rectangle = Rectangle;
