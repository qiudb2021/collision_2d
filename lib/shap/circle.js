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
var view_1 = require("../view");
var marco_1 = require("../marco");
var shap_1 = require("./shap");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, r, shapType) {
        if (shapType === void 0) { shapType = marco_1.ShapType.Circle; }
        var _this = _super.call(this, shapType) || this;
        _this.x = x;
        _this.y = y;
        _this.r = r;
        return _this;
    }
    Circle.prototype.view = function (color, type) {
        if (type === void 0) { type = marco_1.ViewType.Solid; }
        view_1.View.drawCircle(this.x, this.y, this.r, color);
    };
    return Circle;
}(shap_1.Shap));
exports.Circle = Circle;
