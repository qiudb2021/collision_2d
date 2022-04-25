import { Shap } from "./shap";
import { COLORS, ShapType, ViewType } from "../marco";
import { Point } from "../sat/point";
import { Vector2d } from "../sat/vector2d";
import { View } from "../view";
import { Projection } from "../sat/projection";

export class Polygon extends Shap{
    public vertices: Point[];

    public static Create(vertices: Point[] = []): Polygon {
        return new Polygon(vertices);
    }

    protected constructor(vertices: Point[], shapType: ShapType = ShapType.Polygon) {
        super(shapType);
        this.vertices = vertices;
    }

    public view(color: COLORS, type: ViewType = ViewType.Outline): void {
        View.drawPolygon(this.vertices, color)
        this.vertices.forEach(vertex => {
            View.drawCircle(vertex.x, vertex.y, 5, COLORS.Black)
            View.drawText(vertex.x - 20, vertex.y+20, "("+vertex.x+","+vertex.y+")", COLORS.Gray, 10);
        });
    }

    /** 添加顶点 */
    public addVertex(v: Point) {
        this.vertices.push(v);
    }
}