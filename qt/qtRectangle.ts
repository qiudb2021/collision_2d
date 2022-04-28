import { Shap } from "../lib/shap/shap";
import { ShapType, COLORS, ViewType } from "../lib/marco";
import { View } from "../lib/view";

export class qtRectangle extends Shap{
    public x: number;
    public y: number;
    public w: number;
    public h: number;

    public static Create(x: number, y: number, w: number, h: number): qtRectangle {
        return new qtRectangle(x, y, w, h);
    }

    protected constructor(x: number, y: number, w: number, h: number) {
        super(ShapType.QTRectangle)
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    public view(): void {
        View.drawRectangle(this.x, this.y, this.w, this.h, COLORS.Yellow, ViewType.Outline)
    }
}