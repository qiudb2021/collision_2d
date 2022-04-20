"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./lib/shap/circle");
var rectangle_1 = require("./lib/shap/rectangle");
var Graphical = require("graphical");
Graphical.graphical(8111);
var N = 1000 * 1000 * 1000;
var count;
console.time("rectWithRect");
count = N;
var rectA = new rectangle_1.Rectangle(0, 0, 0, 0);
var rectB = new rectangle_1.Rectangle(0, 0, 0, 0);
while (count--) {
    rectA.leftX = 0;
    rectA.leftY = 0;
    rectA.width = 100;
    rectA.height = 200;
    // rectA = new Rectangle(0, 0, 100, 200);
    // rectA.view(COLORS.Black);
    rectB.leftX = 90;
    rectB.leftY = 100;
    rectB.width = 100;
    rectB.height = 50;
    // rectB = new Rectangle(90, 100, 100, 50);
    // rectB.view(COLORS.Blue)
    rectA.collidesWith(rectB);
    // console.log(rectA.collidesWith(rectB));
    // console.log(rectB.collidesWith(rectA));
}
console.timeEnd("rectWithRect");
console.time("circleWithCircle");
count = N;
var circleA = new circle_1.Circle(0, 0, 0);
var circleB = new circle_1.Circle(0, 0, 0);
while (count--) {
    circleA.x = 100;
    circleA.y = 100;
    circleA.r = 100;
    // circleA = new Circle(100,100,100)
    // circleA.view(COLORS.Black)
    circleB.x = 300;
    circleB.y = 100;
    circleB.r = 100;
    // circleB = new Circle(300, 100, 100);
    // circleB.view(COLORS.Blue);
    circleA.collidesWith(circleB);
    // console.log("c1 collide width c2: %j", circleA.collidesWith(circleB));
    // console.log("c2 collide width c1: %j", circleB.collidesWith(circleA));
}
console.timeEnd("circleWithCircle");
