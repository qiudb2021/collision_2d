import { View } from "./view";
import { COLORS, ShapType } from "./marco";
import { Shap } from "./shap";

export class Circle extends Shap {
    public x: number;
    public y: number;
    public r: number;

    public constructor(x: number, y: number, r: number) {
        super(ShapType.Circle);
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public view(color?: COLORS): void {
        View.drawCircle(this.x, this.y, this.r, color || COLORS.Red);
    }
}