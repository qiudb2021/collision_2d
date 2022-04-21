"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marco_1 = require("./lib/marco");
var polygon_1 = require("./lib/shap/polygon");
var point_1 = require("./lib/sat/point");
var vector2d_1 = require("./lib/sat/vector2d");
var Graphical = require("graphical");
Graphical.graphical(8111);
var polygon = polygon_1.Polygon.Create();
polygon.addVertex(point_1.Point.Create(200, 200));
polygon.addVertex(point_1.Point.Create(200, 300));
polygon.addVertex(point_1.Point.Create(250, 350));
polygon.addVertex(point_1.Point.Create(300, 300));
polygon.addVertex(point_1.Point.Create(300, 200));
polygon.view(marco_1.COLORS.Black);
for (var i = 0; i < 10; i++) {
    console.time("getAxes");
    var count = 1000 * 1000 * 100;
    while (count-- > 0) {
        var axes = polygon.getAxes();
        // console.log(axes)
    }
    console.log(vector2d_1.Vector2d.index);
    console.timeEnd("getAxes");
}
// const N = 1000 * 1000 * 1000;
// let count: number;
// console.time("rectWithRect")
// count = N;
// let rectA: Rectangle = new Rectangle(0, 0, 0, 0);
// let rectB: Rectangle = new Rectangle(0, 0, 0, 0);
// while(count--) {
//     rectA.leftX = 0;
//     rectA.leftY = 0;
//     rectA.width = 100;
//     rectA.height = 200;
//     // rectA = new Rectangle(0, 0, 100, 200);
//     // rectA.view(COLORS.Black);
//     rectB.leftX = 90;
//     rectB.leftY = 100;
//     rectB.width = 100;
//     rectB.height = 50;
//     // rectB = new Rectangle(90, 100, 100, 50);
//     // rectB.view(COLORS.Blue)
//     rectA.collidesWith(rectB);
//     // console.log(rectA.collidesWith(rectB));
//     // console.log(rectB.collidesWith(rectA));
// }
// console.timeEnd("rectWithRect")
// console.time("circleWithCircle")
// count = N;
// let circleA: Circle = new Circle(0,0,0);
// let circleB: Circle = new Circle(0,0,0);
// while(count--) {
//     circleA.x = 100;
//     circleA.y = 100;
//     circleA.r = 100;
//     // circleA = new Circle(100,100,100)
//     // circleA.view(COLORS.Black)
//     circleB.x = 300;
//     circleB.y = 100;
//     circleB.r = 100;
//     // circleB = new Circle(300, 100, 100);
//     // circleB.view(COLORS.Blue);
//     circleA.collidesWith(circleB)
//     // console.log("c1 collide width c2: %j", circleA.collidesWith(circleB));
//     // console.log("c2 collide width c1: %j", circleB.collidesWith(circleA));
// }
// console.timeEnd("circleWithCircle")
