"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // if (this.isType(ShapType.Circle) && shap.isType(ShapType.Circle)) {
        //     return Shap.circleWithCircle(<Circle><unknown>this, <Circle>shap)
        // } else if (this.isType(ShapType.Rectangle) && shap.isType(ShapType.Rectangle)) {
        //     return Shap.rectangleWithRectangle(<Rectangle><unknown>this, <Rectangle>shap)
        //     // 多边形碰撞与多边形碰撞：分离轴定理
        // } else if(this.isType(ShapType.SATPolygon) && shap.isType(ShapType.SATPolygon)) {
        //     return SAT.collide(<SATPolygon><unknown>this, <SATPolygon>shap);
        // }
        // return false;
        return sat_1.SAT.collide(this, shap);
    };
    /** 圆形与圆形碰撞 */
    Shap.circleWithCircle = function (c, c2) {
        return (c.x - c2.x) * (c.x - c2.x) + (c.y - c2.y) * (c.y - c2.y) <= (c.r + c2.r) * (c.r + c2.r);
    };
    /** 任意两个（无旋转）矩形碰撞检测 */
    Shap.rectangleWithRectangle = function (rectA, rectB) {
        return (rectA.leftX < rectB.leftX + rectB.width &&
            rectA.leftX + rectA.width > rectB.leftX &&
            rectA.leftY < rectB.leftY + rectB.height &&
            rectA.leftY + rectA.height > rectB.leftY);
    };
    Shap.circleWithRectangle = function (circle, rect) {
        return false;
    };
    return Shap;
}());
exports.Shap = Shap;
;
