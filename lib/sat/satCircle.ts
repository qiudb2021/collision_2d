import { Circle } from "../shap/circle";
import { ShapType } from "../marco";
import { Polygon } from "../shap/polygon";
import { Point } from "./point";
import { Vector2d } from "./vector2d";
import { Projection } from "./projection";

export class SATCircle extends Circle {
    public static Create(x: number, y: number, r: number): SATCircle {
        return new SATCircle(x, y, r);
    }

    protected constructor(x: number, y: number, r: number) {
        super(x, y, r, ShapType.SATCircle);
    }

    /** 计算投影轴 */
    public getAxis(vertices: Point[], v: Vector2d, v1: Vector2d, v2: Vector2d): void {
        let closest = this.closest(vertices);
        v1.x = this.x;
        v1.y = this.y;

        v2.x = closest.x;
        v2.y = closest.y;

        // 边缘向量->投影轴->单位向量
        Vector2d.substract(v1, v2, v).perpendicular(false).normalize(false);
    }

    /** 返回圆心距离顶点列表中最近的顶点 */
    protected closest(vertices: Point[]): Point {
        let res: Point = vertices[0];
        let p: Point;
        let distance: number;
        let min = Number.MAX_VALUE;
        for (let i = 0; i < vertices.length; i++) {
            p = vertices[i];
            distance = (p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y);
            if (distance < min) {
                min = distance;
                res = p;
            }
        }

        return res;
    }

    /** 计算在投影轴axis上投影大小 */
    public project(axis: Vector2d, p: Projection, v: Vector2d): void {
        let scalars: number[] = [];
        v.x = this.x;
        v.y = this.y;
        
        // 先计算圆心到投影轴上的投影
        let dot = Vector2d.dot(v, axis);

        // 再加上两半径
        scalars.push(dot);
        scalars.push(dot - this.r);
        scalars.push(dot + this.r);
        
        p.min = Math.min.apply(Math, scalars);
        p.max = Math.max.apply(Math, scalars);
    }
}