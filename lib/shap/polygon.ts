import { Shap } from "./shap";
import { COLORS, ShapType, ViewType } from "../marco";
import { Point } from "../sat/point";
import { Vector2d } from "../sat/vector2d";
import { View } from "../view";

export class Polygon extends Shap{
    public vertices: Point[];

    public static Create(vertices: Point[] = []): Polygon {
        return new Polygon(vertices);
    }

    protected constructor(vertices: Point[]) {
        super(ShapType.Polygon);
        this.vertices = vertices;
    }

    public view(color: COLORS, type: ViewType = ViewType.Outline): void {
        View.drawPolygon(this.vertices, color)
    }

    /** 添加顶点 */
    public addVertex(v: Point) {
        this.vertices.push(v);
    }

    /** 获取多边形的所有投影轴 */
    public getAxes(): Vector2d[] {
        // let v1: Vector2d = Vector2d.Create(this.vertices[0].x, this.vertices[0].y);
        let v: Vector2d;
        let v1: Vector2d = Vector2d.Create(this.vertices[0].x, this.vertices[1].x);
        let v2: Vector2d = Vector2d.Create(0, 0);

        let axes: Vector2d[] = [];

        let len = this.vertices.length;
        // 遍历顶点[0, n-2]
        let vertex1: Point;
        let vertex2: Point;
        for (let i = 1; i < len - 1; i++) {
            // vertex1 = this.vertices[i];
            vertex2 = this.vertices[i];

            // v1.x = vertex1.x;
            // v1.y = vertex1.y
            v2.x = vertex2.x;
            v2.y = vertex2.y;

            v = Vector2d.Create(0, 0);
            axes.push(v1.edge(v2, v).normal(v));
            // axes.push(v1.edge(v2).normal());

            v1 = v2;
        }

        // 形成闭环[n-1, 0]
        v1.x = this.vertices[len-1].x;
        v1.y = this.vertices[len-1].y;

        v2.x = this.vertices[0].x;
        v2.y = this.vertices[0].y;

        v = Vector2d.Create(0, 0);
        axes.push(v1.edge(v2, v).normal(v));
        // axes.push(v1.edge(v2).normal());


        return axes;
    }
}