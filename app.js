"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./lib/sat/point");
var satPolygon_1 = require("./lib/sat/satPolygon");
var satCircle_1 = require("./lib/sat/satCircle");
var Graphical = require("graphical");
Graphical.graphical(8111);
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
polygon.addVertex(point_1.Point.Create(240, 75));
polygon.addVertex(point_1.Point.Create(190, 125));
polygon.addVertex(point_1.Point.Create(190, 175));
polygon.addVertex(point_1.Point.Create(240, 225));
polygon.addVertex(point_1.Point.Create(290, 175));
polygon.addVertex(point_1.Point.Create(290, 125));
// polygon.view(COLORS.Black);
// console.log(polygon.collidesWith(polygon2))
for (var i = 0; i < 10; i++) {
    var count = 100 * 1000 * 1000;
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
