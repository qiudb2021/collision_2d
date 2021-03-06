"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COLORS;
(function (COLORS) {
    COLORS["Red"] = "red";
    COLORS["Yellow"] = "yellow";
    COLORS["Blue"] = "blue";
    COLORS["Green"] = "green";
    COLORS["Gray"] = "gray";
    COLORS["Black"] = "black";
    COLORS["Brown"] = "brown";
    COLORS["Purple"] = "purple";
})(COLORS = exports.COLORS || (exports.COLORS = {}));
var ShapType;
(function (ShapType) {
    ShapType[ShapType["Shap"] = 0] = "Shap";
    ShapType[ShapType["Circle"] = 1] = "Circle";
    ShapType[ShapType["Rectangle"] = 2] = "Rectangle";
    ShapType[ShapType["Polygon"] = 3] = "Polygon";
    ShapType[ShapType["SATCircle"] = 4] = "SATCircle";
    ShapType[ShapType["SATPolygon"] = 5] = "SATPolygon";
    ShapType[ShapType["QTRectangle"] = 6] = "QTRectangle";
})(ShapType = exports.ShapType || (exports.ShapType = {}));
var ViewType;
(function (ViewType) {
    ViewType[ViewType["Outline"] = 1] = "Outline";
    ViewType[ViewType["Solid"] = 2] = "Solid";
})(ViewType = exports.ViewType || (exports.ViewType = {}));
