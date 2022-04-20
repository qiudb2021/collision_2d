import { Circle } from "./lib/shap/circle";
import { COLORS } from "./lib/marco";

const Graphical = require("graphical");

Graphical.graphical(8111);

let circle = new Circle(100,100,100)
circle.view(COLORS.Black)

let circle2 = new Circle(300, 100, 100);
circle2.view(COLORS.Blue);

console.log("c1 collide width c2: %j", circle.collidesWith(circle2));
console.log("c2 collide width c1: %j", circle2.collidesWith(circle));
