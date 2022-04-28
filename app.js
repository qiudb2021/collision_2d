"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marco_1 = require("./lib/marco");
var rectangle_1 = require("./lib/shap/rectangle");
var point_1 = require("./lib/sat/point");
var satPolygon_1 = require("./lib/sat/satPolygon");
var satCircle_1 = require("./lib/sat/satCircle");
var QuadTree_1 = require("./qt/QuadTree");
var qtRectangle_1 = require("./qt/qtRectangle");
var MathUtil_1 = require("./lib/MathUtil");
var Graphical = require("graphical");
Graphical.graphical(8111);
function testSAT() {
    var polygon2 = satPolygon_1.SATPolygon.Create();
    polygon2.addVertex(point_1.Point.Create(100, 100));
    polygon2.addVertex(point_1.Point.Create(50, 150));
    polygon2.addVertex(point_1.Point.Create(100, 200));
    polygon2.addVertex(point_1.Point.Create(150, 200));
    polygon2.addVertex(point_1.Point.Create(200, 150));
    polygon2.addVertex(point_1.Point.Create(150, 100));
    // polygon2.view(COLORS.Blue);
    var circle = satCircle_1.SATCircle.Create(150, 150, 50);
    // circle.view(COLORS.Red, ViewType.Outline);
    var polygon = satPolygon_1.SATPolygon.Create();
    polygon.addVertex(point_1.Point.Create(250 - 10, 75));
    polygon.addVertex(point_1.Point.Create(200 - 10, 125));
    polygon.addVertex(point_1.Point.Create(200 - 10, 175));
    polygon.addVertex(point_1.Point.Create(250 - 10, 225));
    polygon.addVertex(point_1.Point.Create(300 - 10, 175));
    polygon.addVertex(point_1.Point.Create(300 - 10, 125));
    // polygon.view(COLORS.Black);
    // console.log(polygon.collidesWith(polygon2))
    for (var i = 0; i < 10; i++) {
        var count = 1000 * 1000 * 100;
        console.time("polygon");
        while (count--) {
            // let polygon2 = SATPolygon.Create();
            // polygon2.addVertex(Point.Create(100, 100));
            // polygon2.addVertex(Point.Create(50, 150));
            // polygon2.addVertex(Point.Create(100, 200));
            // polygon2.addVertex(Point.Create(150, 200));
            // polygon2.addVertex(Point.Create(200, 150));
            // polygon2.addVertex(Point.Create(150, 100));
            // // polygon2.view(COLORS.Blue);
            // let polygon = SATPolygon.Create();
            // polygon.addVertex(Point.Create(240, 75));
            // polygon.addVertex(Point.Create(190, 125));
            // polygon.addVertex(Point.Create(190, 175));
            // polygon.addVertex(Point.Create(240, 225));
            // polygon.addVertex(Point.Create(290, 175));
            // polygon.addVertex(Point.Create(290, 125));
            // polygon.view(COLORS.Black);
            polygon.collidesWith(polygon2);
            // SAT.collideCircleWithPolygon(circle, polygon)
        }
        console.timeEnd("polygon");
    }
}
function testRect() {
    var rect = new rectangle_1.Rectangle(point_1.Point.Create(100, 100), point_1.Point.Create(150, 200));
    rect.view(marco_1.COLORS.Black, marco_1.ViewType.Outline);
    var rect2 = new rectangle_1.Rectangle(point_1.Point.Create(150, 100), point_1.Point.Create(250, 150));
    rect2.view(marco_1.COLORS.Black, marco_1.ViewType.Outline);
    console.log(rect.collidesWith(rect2));
}
function testQT() {
    var x = 0;
    var y = 0;
    var w = 1000;
    var h = 1000;
    var qt = QuadTree_1.QuadTree.Create(0, qtRectangle_1.qtRectangle.Create(x, y, w, h));
    // 添加圆形
    for (var i = 0; i < 20; i++) {
        var cx = MathUtil_1.MathUtil.rand(0, w - 100);
        var cy = MathUtil_1.MathUtil.rand(0, h - 100);
        var r = MathUtil_1.MathUtil.rand(10, 40);
        var circle = satCircle_1.SATCircle.Create(cx, cy, r);
        qt.insert(circle);
    }
    // 添加多边形
    var polygon2 = satPolygon_1.SATPolygon.Create();
    polygon2.addVertex(point_1.Point.Create(100, 100));
    polygon2.addVertex(point_1.Point.Create(50, 150));
    polygon2.addVertex(point_1.Point.Create(100, 200));
    polygon2.addVertex(point_1.Point.Create(150, 200));
    polygon2.addVertex(point_1.Point.Create(200, 150));
    polygon2.addVertex(point_1.Point.Create(150, 100));
    qt.insert(polygon2);
    polygon2.view(marco_1.COLORS.Blue);
    var polygon = satPolygon_1.SATPolygon.Create();
    polygon.addVertex(point_1.Point.Create(250 - 10, 75));
    polygon.addVertex(point_1.Point.Create(200 - 10, 125));
    polygon.addVertex(point_1.Point.Create(200 - 10, 175));
    polygon.addVertex(point_1.Point.Create(250 - 10, 225));
    polygon.addVertex(point_1.Point.Create(300 - 10, 175));
    polygon.addVertex(point_1.Point.Create(300 - 10, 125));
    polygon.view(marco_1.COLORS.Blue);
    qt.insert(polygon);
    qt.view();
    var results = [];
    var bounds = qtRectangle_1.qtRectangle.Create(200, 200, 200, 200);
    qt.retrieve(results, bounds);
    bounds.view();
    results.forEach(function (shap) {
        shap.view(marco_1.COLORS.Red, marco_1.ViewType.Outline);
    });
    console.log("检索结果", results);
    console.log(qt);
}
testQT();
// testRect();
// testSAT();
