import { Shap } from "./shap";
import { ShapType, COLORS, ViewType } from "../marco";
import { View } from "../view";

export class Rectangle extends Shap {
    public leftX: number;
    public leftY: number;
    public width: number;
    public height: number;

    public constructor(leftX: number, leftY: number, width: number, height: number) {
        super(ShapType.Rectangle);
        this.leftX = leftX;
        this.leftY = leftY;
        this.width = width;
        this.height = height;
    }
    public view(color: COLORS, type: ViewType = ViewType.Solid): void {
        View.drawRectangle(this.leftX, this.leftY, this.width, this.height, color || COLORS.Black)
    }
}