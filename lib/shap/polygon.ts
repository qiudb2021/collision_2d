import { Shap } from "./shap";
import { COLORS, ShapType, ViewType } from "../marco";
import { Point } from "../sat/point";
import { Vector2d } from "../sat/vector2d";
import { View } from "../view";
import { Projection } from "../sat/projection";
import { Rectangle } from "./rectangle";

export class Polygon extends Shap{
    public vertices: Point[];
    public aabb: Rectangle;

    public static Create(vertices: Point[] = []): Polygon {
        return new Polygon(vertices);
    }

    protected constructor(vertices: Point[], shapType: ShapType = ShapType.Polygon) {
        super(shapType);
        this.vertices = vertices;
        this.aabb = <Rectangle><unknown>null;
        if (this.vertices) {
            this.calcAABB();
        }
    }

    public view(color: COLORS, type: ViewType = ViewType.Outline): void {
        View.drawPolygon(this.vertices, color)
        this.vertices.forEach(vertex => {
            View.drawCircle(vertex.x, vertex.y, 5, COLORS.Black)
            View.drawText(vertex.x - 20, vertex.y+20, "("+vertex.x+","+vertex.y+")", COLORS.Gray, 10);
        });

        let aabb = this.getAABB();
        if (aabb) {
            aabb.view(COLORS.Gray, ViewType.Outline);
        }
    }

    /** 添加顶点 */
    public addVertex(v: Point) {
        this.vertices.push(v);
    }

    public getAABB() {
        if (!this.aabb) {
            this.calcAABB();
        }
        return this.aabb;
    }

    protected calcAABB() {
        if (!this.vertices.length) {
            return null;
        }

        let lTop = Point.Create(0, 0);
        let rButtom = Point.Create(0, 0);

        let lx: number = this.vertices[0].x;
        let ly: number = this.vertices[0].y;
        let rx: number = this.vertices[0].x;
        let ry: number = this.vertices[0].y;

        let vertex: Point;
        for (let i = 1; i < this.vertices.length; i++) {
            vertex = this.vertices[i];
            if (vertex.x < lx) lx = vertex.x;
            if (vertex.x > rx) rx = vertex.x;
            if (vertex.y < ly) ly = vertex.y;
            if (vertex.y > ry) ry = vertex.y;
        }

        lTop.x = lx;
        lTop.y = ly;
        rButtom.x = rx;
        rButtom.y = ry;
        this.aabb = Rectangle.Create(lTop, rButtom);
    }
}