import { Circle } from "./lib/shap/circle";
import { COLORS, ViewType } from "./lib/marco";
import { Rectangle } from "./lib/shap/rectangle";
import { Polygon } from "./lib/shap/polygon";
import { Point } from "./lib/sat/point";
import { Vector2d } from "./lib/sat/vector2d";
import { SATPolygon } from "./lib/sat/satPolygon";
import { SATCircle } from "./lib/sat/satCircle";
import { SAT } from "./lib/sat/sat";
import { QuadTree } from "./qt/QuadTree";
import { qtRectangle } from "./qt/qtRectangle";
import { MathUtil } from "./lib/MathUtil";

const Graphical = require("graphical");

Graphical.graphical(8111);


function testSAT() {
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
    polygon.addVertex(Point.Create(250 - 10, 75));
    polygon.addVertex(Point.Create(200 - 10, 125));
    polygon.addVertex(Point.Create(200 - 10, 175));
    polygon.addVertex(Point.Create(250 - 10, 225));
    polygon.addVertex(Point.Create(300 - 10, 175));
    polygon.addVertex(Point.Create(300 - 10, 125));
    // polygon.view(COLORS.Black);
    
    // console.log(polygon.collidesWith(polygon2))
    
    for (let i = 0; i < 10; i++) {
        
        let count = 1000 * 1000 * 100;
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
}

function testRect() {
    let rect = new Rectangle(Point.Create(100, 100), Point.Create(150, 200));
    rect.view(COLORS.Black, ViewType.Outline);

    let rect2 = new Rectangle(Point.Create(150, 100), Point.Create(250, 150));
    rect2.view(COLORS.Black, ViewType.Outline);

    console.log(rect.collidesWith(rect2))
}

function testQT() {
    let x = 0;
    let y = 0;
    let w = 1000;
    let h = 1000;

    let qt = QuadTree.Create(0, qtRectangle.Create(x, y, w, h))

    // 添加圆形
    for (let i = 0; i < 10; i++) {
        let cx = MathUtil.rand(0, w - 100);
        let cy = MathUtil.rand(0, h - 100);
        let r = MathUtil.rand(10, 40);

        let circle = SATCircle.Create(cx, cy, r);
        qt.insert(circle)
    }

    // 添加多边形
    let polygon2 = SATPolygon.Create();
    polygon2.addVertex(Point.Create(100, 100));
    polygon2.addVertex(Point.Create(50, 150));
    polygon2.addVertex(Point.Create(100, 200));
    polygon2.addVertex(Point.Create(150, 200));
    polygon2.addVertex(Point.Create(200, 150));
    polygon2.addVertex(Point.Create(150, 100));
    qt.insert(polygon2);
    polygon2.view(COLORS.Blue);
    
    let polygon = SATPolygon.Create();
    polygon.addVertex(Point.Create(250 - 10, 75));
    polygon.addVertex(Point.Create(200 - 10, 125));
    polygon.addVertex(Point.Create(200 - 10, 175));
    polygon.addVertex(Point.Create(250 - 10, 225));
    polygon.addVertex(Point.Create(300 - 10, 175));
    polygon.addVertex(Point.Create(300 - 10, 125));
    polygon.view(COLORS.Blue);
    qt.insert(polygon);
    qt.view();

    console.log(qt);
}
testQT();
// testRect();
// testSAT();
