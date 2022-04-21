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
var vector2d_1 = require("../sat/vector2d");
var view_1 = require("../view");
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(vertices) {
        var _this = _super.call(this, marco_1.ShapType.Polygon) || this;
        _this.vertices = vertices;
        return _this;
    }
    Polygon.Create = function (vertices) {
        if (vertices === void 0) { vertices = []; }
        return new Polygon(vertices);
    };
    Polygon.prototype.view = function (color, type) {
        if (type === void 0) { type = marco_1.ViewType.Outline; }
        view_1.View.drawPolygon(this.vertices, color);
    };
    /** 添加顶点 */
    Polygon.prototype.addVertex = function (v) {
        this.vertices.push(v);
    };
    /** 获取多边形的所有投影轴 */
    Polygon.prototype.getAxes = function () {
        // let v1: Vector2d = Vector2d.Create(this.vertices[0].x, this.vertices[0].y);
        var v;
        var v1 = vector2d_1.Vector2d.Create(this.vertices[0].x, this.vertices[1].x);
        var v2 = vector2d_1.Vector2d.Create(0, 0);
        var axes = [];
        var len = this.vertices.length;
        // 遍历顶点[0, n-2]
        var vertex1;
        var vertex2;
        for (var i = 1; i < len - 1; i++) {
            // vertex1 = this.vertices[i];
            vertex2 = this.vertices[i];
            // v1.x = vertex1.x;
            // v1.y = vertex1.y
            v2.x = vertex2.x;
            v2.y = vertex2.y;
            v = vector2d_1.Vector2d.Create(0, 0);
            axes.push(v1.edge(v2, v).normal(v));
            // axes.push(v1.edge(v2).normal());
            v1 = v2;
        }
        // 形成闭环[n-1, 0]
        v1.x = this.vertices[len - 1].x;
        v1.y = this.vertices[len - 1].y;
        v2.x = this.vertices[0].x;
        v2.y = this.vertices[0].y;
        v = vector2d_1.Vector2d.Create(0, 0);
        axes.push(v1.edge(v2, v).normal(v));
        // axes.push(v1.edge(v2).normal());
        return axes;
    };
    return Polygon;
}(shap_1.Shap));
exports.Polygon = Polygon;
