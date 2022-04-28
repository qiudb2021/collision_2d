import { Shap } from "./shap";
import { ShapType, COLORS, ViewType } from "../marco";
import { View } from "../view";
import { Point } from "../sat/point";
import { Vector2d } from "../sat/vector2d";

export class Rectangle extends Shap {

    public lTop: Point;
    public rButtom: Point;

    public get width(): number {
        return this.rButtom.x - this.lTop.x
    }

    public get height(): number {
        return this.rButtom.y - this.lTop.y;
    }

    public static Create(lTop: Point, rButtom: Point) {
        return new Rectangle(lTop, rButtom);
    }
    public constructor(lTop: Point, rButtom: Point) {
        super(ShapType.Rectangle);
        this.lTop = lTop
        this.rButtom = rButtom;
    }

    public view(color: COLORS, type: ViewType = ViewType.Solid): void {
        if (type == ViewType.Solid) {
            View.drawRectangle(this.lTop.x, this.rButtom.y - this.height, this.width, this.height, color || COLORS.Black)
        } else {
            View.drawLine(this.lTop.x, this.lTop.y, this.lTop.x, this.rButtom.y, color, 1);
            View.drawLine(this.lTop.x, this.rButtom.y, this.rButtom.x, this.rButtom.y, color, 1);
            View.drawLine(this.rButtom.x, this.rButtom.y, this.rButtom.x, this.lTop.y, color, 1);
            View.drawLine(this.lTop.x, this.lTop.y, this.rButtom.x, this.lTop.y, color, 1);

        }
        View.drawText(this.lTop.x, this.lTop.y, this.uid + "", color, 8)
    }
}