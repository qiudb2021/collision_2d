"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marco_1 = require("../marco");
var sat_1 = require("../sat/sat");
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
        else if (this.isType(marco_1.ShapType.Rectangle) && shap.isType(marco_1.ShapType.Rectangle)) {
            return Shap.rectangleWithRectangle(this, shap);
            // 多边形碰撞与多边形碰撞：分离轴定理
        }
        else if (this.isType(marco_1.ShapType.SATPolygon) && shap.isType(marco_1.ShapType.SATPolygon)) {
            return sat_1.SAT.collide(this, shap);
        }
        return false;
        return sat_1.SAT.collide(this, shap);
    };
    /** 圆形与圆形碰撞 */
    Shap.circleWithCircle = function (c, c2) {
        return (c.x - c2.x) * (c.x - c2.x) + (c.y - c2.y) * (c.y - c2.y) <= (c.r + c2.r) * (c.r + c2.r);
    };
    /** 任意两个（无旋转）矩形碰撞检测 */
    Shap.rectangleWithRectangle = function (rectA, rectB) {
        return (rectA.lTop.x < rectB.rButtom.x &&
            rectA.rButtom.x > rectB.lTop.x &&
            rectA.lTop.y < rectB.rButtom.y &&
            rectA.rButtom.y > rectB.lTop.y);
    };
    Shap.circleWithRectangle = function (circle, rect) {
        return false;
    };
    return Shap;
}());
exports.Shap = Shap;
;
