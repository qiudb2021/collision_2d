"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marco_1 = require("./marco");
/**
 * 碰撞图形基类
 */
var Shap = /** @class */ (function () {
    function Shap(type) {
        this.type = type;
    }
    /** 判断图形开关 */
    Shap.prototype.isType = function (shapType) {
        return this.type === shapType;
    };
    Shap.prototype.collidesWith = function (shap) {
        // 圆形与圆形碰撞
        if (this.isType(marco_1.ShapType.Circle) && shap.isType(marco_1.ShapType.Circle)) {
            return Shap.circleWithCircle(this, shap);
        }
        return false;
    };
    /** 圆形与圆形碰撞 */
    Shap.circleWithCircle = function (c, c2) {
        console.log((c.x - c2.x) * (c.x - c2.x) + (c.y - c2.y) * (c.y - c2.y));
        console.log((c.r + c2.r) * (c.r + c2.r));
        return (c.x - c2.x) * (c.x - c2.x) + (c.y - c2.y) * (c.y - c2.y) <= (c.r + c2.r) * (c.r + c2.r);
    };
    return Shap;
}());
exports.Shap = Shap;
;
