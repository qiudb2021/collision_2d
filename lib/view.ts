import { COLORS } from "./marco";
import { Point } from "./sat/point";

const Graphical = require("graphical");

export class View {
    public static drawLine(x0: number, y0: number, x1: number, y1: number, color: COLORS, width: number): void {
        let line = new Graphical.Line();
        line.setPos(x0, y0);
        line.setPos2(x1, y1);
        line.setColor(color);
        line.setWidth(width);
    }

    public static drawCircle(x: number, y: number, r: number, color: COLORS): void {
        let circle = new Graphical.Circle();
        circle.setPos(x, y);
        circle.setRadius(r);
        circle.setColor(color);
    }

    public static drawRectangle(leftx: number,lefty: number, width: number, height: number, color: COLORS): void {
        let rectangle = new Graphical.Rectangle();
        rectangle.setPos(leftx, lefty);
        rectangle.setSize(width, height);
        rectangle.setColor(color);
    }

    public static drawPolygon(vertices: Point[], color: COLORS) {
        let from: Point;
        let to: Point;
        let len = vertices.length;
        for (let i = 0; i < len; i++) {
            from = vertices[i%len];
            to = vertices[(i+1)%len]
            View.drawLine(from.x, from.y, to.x, to.y, color, 1);
        }
    }
}