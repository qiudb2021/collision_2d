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
var polygon_1 = require("../shap/polygon");
var marco_1 = require("../marco");
var vector2d_1 = require("./vector2d");
var SATPolygon = /** @class */ (function (_super) {
    __extends(SATPolygon, _super);
    function SATPolygon(vertices) {
        return _super.call(this, vertices, marco_1.ShapType.SATPolygon) || this;
    }
    SATPolygon.Create = function (vertices) {
        if (vertices === void 0) { vertices = []; }
        return new SATPolygon(vertices);
    };
    /** 获取顶点v和下个顶点v1的投影轴的单位向量 */
    SATPolygon.prototype.getAxis = function (index, v, v1, v2) {
        var nextIndex = index + 1 < this.vertices.length ? index + 1 : 0;
        var next = this.vertices[nextIndex];
        var current = this.vertices[index];
        // console.log("vertex %j and %j", current, next)
        v1.x = current.x;
        v1.y = current.y;
        v2.x = next.x;
        v2.y = next.y;
        // 边缘向量
        vector2d_1.Vector2d.substract(v1, v2, v);
        // 边缘向量的法向量并转化成单位向量
        v.perpendicular(false).normalize(false);
    };
    /** 计算多边形在投影轴axis上的投影大小 */
    SATPolygon.prototype.project = function (axis, p, v) {
        var scacles = [];
        this.vertices.forEach(function (vertex) {
            v.x = vertex.x;
            v.y = vertex.y;
            // 各个顶点在投影轴上的投影
            // 投影轴的长度
            scacles.push(vector2d_1.Vector2d.dot(v, axis));
        });
        p.min = Math.min.apply(Math, scacles);
        p.max = Math.max.apply(Math, scacles);
    };
    return SATPolygon;
}(polygon_1.Polygon));
exports.SATPolygon = SATPolygon;
