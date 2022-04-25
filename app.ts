import { Circle } from "./lib/shap/circle";
import { COLORS, ViewType } from "./lib/marco";
import { Rectangle } from "./lib/shap/rectangle";
import { Polygon } from "./lib/shap/polygon";
import { Point } from "./lib/sat/point";
import { Vector2d } from "./lib/sat/vector2d";
import { SATPolygon } from "./lib/sat/satPolygon";
import { SATCircle } from "./lib/sat/satCircle";
import { SAT } from "./lib/sat/sat";

const Graphical = require("graphical");

Graphical.graphical(8111);


let polygon2 = SATPolygon.Create();
polygon2.addVertex(Point.Create(100, 100));
polygon2.addVertex(Point.Create(50, 150));
polygon2.addVertex(Point.Create(100, 200));
polygon2.addVertex(Point.Create(150, 200));
polygon2.addVertex(Point.Create(200, 150));
polygon2.addVertex(Point.Create(150, 100));
// polygon2.view(COLORS.Blue);
let circle = SATCircle.Create(150, 150, 50);
// circle.view(COLORS.Red, ViewType.Outline);

let polygon = SATPolygon.Create();
polygon.addVertex(Point.Create(240, 75));
polygon.addVertex(Point.Create(190, 125));
polygon.addVertex(Point.Create(190, 175));
polygon.addVertex(Point.Create(240, 225));
polygon.addVertex(Point.Create(290, 175));
polygon.addVertex(Point.Create(290, 125));
// polygon.view(COLORS.Black);


for (let i = 0; i < 10; i++) {
    
    let count = 1000 * 1000 * 10;
    console.time("polygon")
    while(count--) {
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
    console.timeEnd("polygon")
}
