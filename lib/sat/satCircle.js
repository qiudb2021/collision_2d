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
var circle_1 = require("../shap/circle");
var marco_1 = require("../marco");
var vector2d_1 = require("./vector2d");
var SATCircle = /** @class */ (function (_super) {
    __extends(SATCircle, _super);
    function SATCircle(x, y, r) {
        return _super.call(this, x, y, r, marco_1.ShapType.SATCircle) || this;
    }
    SATCircle.Create = function (x, y, r) {
        return new SATCircle(x, y, r);
    };
    /** 计算投影轴 */
    SATCircle.prototype.getAxis = function (vertices, v, v1, v2) {
        var closest = this.closest(vertices);
        v1.x = this.x;
        v1.y = this.y;
        v2.x = closest.x;
        v2.y = closest.y;
        // 边缘向量->投影轴->单位向量
        vector2d_1.Vector2d.substract(v1, v2, v).perpendicular(false).normalize(false);
    };
    /** 返回圆心距离顶点列表中最近的顶点 */
    SATCircle.prototype.closest = function (vertices) {
        var res = vertices[0];
        var p;
        var distance;
        var min = Number.MAX_VALUE;
        for (var i = 0; i < vertices.length; i++) {
            p = vertices[i];
            distance = (p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y);
            if (distance < min) {
                min = distance;
                res = p;
            }
        }
        return res;
    };
    /** 计算在投影轴axis上投影大小 */
    SATCircle.prototype.project = function (axis, p, v) {
        var scalars = [];
        v.x = this.x;
        v.y = this.y;
        // 先计算圆心到投影轴上的投影
        var dot = vector2d_1.Vector2d.dot(v, axis);
        // 再加上两半径
        scalars.push(dot);
        scalars.push(dot - this.r);
        scalars.push(dot + this.r);
        p.min = Math.min.apply(Math, scalars);
        p.max = Math.max.apply(Math, scalars);
    };
    return SATCircle;
}(circle_1.Circle));
exports.SATCircle = SATCircle;
