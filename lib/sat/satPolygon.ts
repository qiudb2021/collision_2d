import { Polygon } from "../shap/polygon";
import { Point } from "./point";
import { ShapType } from "../marco";
import { Vector2d } from "./vector2d";
import { Projection } from "./projection";

export class SATPolygon extends Polygon {
    public static Create(vertices: Point[] = []): SATPolygon {
        return new SATPolygon(vertices);
    }

    public constructor(vertices: Point[]) {
        super(vertices, ShapType.SATPolygon);
    }

    /** 获取顶点v和下个顶点v1的投影轴的单位向量 */
    public getAxis(index: number, v: Vector2d, v1: Vector2d, v2: Vector2d): void {
        let nextIndex = index + 1 < this.vertices.length ? index + 1 : 0;
        let next = this.vertices[nextIndex];
        let current = this.vertices[index];

        // console.log("vertex %j and %j", current, next)
        v1.x = current.x;
        v1.y = current.y;

        v2.x = next.x;
        v2.y = next.y;

        // 边缘向量
        Vector2d.substract(v1, v2, v);
        // 边缘向量的法向量并转化成单位向量
        v.perpendicular(false).normalize(false);
    }

    /** 计算多边形在投影轴axis上的投影大小 */
    public project(axis: Vector2d, p: Projection, v: Vector2d): void {
        let scacles: number[] = [];
        this.vertices.forEach(vertex => {
            v.x = vertex.x;
            v.y = vertex.y;
            // 各个顶点在投影轴上的投影
            // 投影轴的长度
            scacles.push(Vector2d.dot(v, axis));
        });

        p.min = Math.min.apply(Math, scacles);
        p.max = Math.max.apply(Math, scacles);
    }
}