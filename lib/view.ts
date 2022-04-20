import { COLORS } from "./marco";

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
}