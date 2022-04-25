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
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(vertices, shapType) {
        if (shapType === void 0) { shapType = marco_1.ShapType.Polygon; }
        var _this = _super.call(this, shapType) || this;
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
        this.vertices.forEach(function (vertex) {
            view_1.View.drawCircle(vertex.x, vertex.y, 5, marco_1.COLORS.Black);
            view_1.View.drawText(vertex.x - 20, vertex.y + 20, "(" + vertex.x + "," + vertex.y + ")", marco_1.COLORS.Gray, 10);
        });
    };
    /** 添加顶点 */
    Polygon.prototype.addVertex = function (v) {
        this.vertices.push(v);
    };
    return Polygon;
}(shap_1.Shap));
exports.Polygon = Polygon;
