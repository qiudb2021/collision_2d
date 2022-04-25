import { Vector2d } from "./vector2d";
import { Projection } from "./projection";
import { SATPolygon } from "./satPolygon";
import { SATCircle } from "./satCircle";

export class SAT {
    protected static sat: SAT;

    public static instance(): SAT {
        return SAT.sat || (SAT.sat = new SAT());
    }

    public static collide(polygonA: SATPolygon, polygonB: SATPolygon): boolean {
        // 依次获取ploygonA的投影轴，获取polygonA、polygonB在该投影轴上的投影
        let axis: Vector2d = new Vector2d(0, 0);
        // 投影范围
        let pA: Projection = Projection.Create(0, 0);
        let pB: Projection = Projection.Create(0, 0);
        let v: Vector2d = new Vector2d(0, 0);
        let v1: Vector2d = new Vector2d(0, 0);
        let v2: Vector2d = new Vector2d(0, 0);
        // let count: number = 0;
        for(let i = 0; i < polygonA.vertices.length; i++) {
            // count++;
            // 投影轴
            polygonA.getAxis(i, axis, v1, v2);
            // 多边形A、B在投影轴上的投影范围pA、pB
            polygonA.project(axis, pA, v);
            polygonB.project(axis, pB, v);

            //  // 判断投影轴上的投影是否存在重叠，若检测到存在间隙则立刻退出判断，消除不必要的运算
            if (!Projection.overlaps(pA, pB)) {
                // console.log("在polygonA顶点%j的分离轴上的投影没有重叠，共检测了%j个分离轴", polygonA.vertices[i], count)
                return false;
            }
        }

        for (let i = 0; i < polygonB.vertices.length; i++) {
            // count++;
            // 投影轴
            polygonA.getAxis(i, axis, v1, v2);
            // 多边形A、B在投影轴上的投影范围pA、pB
            polygonA.project(axis, pA, v);
            polygonB.project(axis, pB, v);

            //  // 判断投影轴上的投影是否存在重叠，若检测到存在间隙则立刻退出判断，消除不必要的运算
            if (!Projection.overlaps(pA, pB)) {
                // console.log("在polygonB的顶点%j与顶点%j的分离轴上的投影没有重叠，共检测了%j个分离轴", polygonB.vertices[i], count)
                return false;
            }
        }

        // console.log("总共检测了%d个分离轴", count)
        return true;
    }

    public static collideCircleWithPolygon(circle: SATCircle, polygon: SATPolygon): boolean {
        // 圆的投影轴与多边形
        let axis: Vector2d = new Vector2d(0, 0);
        // 投影范围
        let pA: Projection = Projection.Create(0, 0);
        let pB: Projection = Projection.Create(0, 0);
        let v: Vector2d = new Vector2d(0, 0);
        let v1: Vector2d = new Vector2d(0, 0);
        let v2: Vector2d = new Vector2d(0, 0);

        circle.getAxis(polygon.vertices, axis, v1, v2);
        
        polygon.project(axis, pA, v);
        circle.project(axis, pB, v);

        if (!Projection.overlaps(pA, pB)) {
            return false;
        }

        // 多边形投影轴与圆
        for (let i = 0; i < polygon.vertices.length; i++) {
            polygon.getAxis(i, axis, v1, v2);

            polygon.project(axis, pA, v);
            circle.project(axis, pB, v);

            if(!Projection.overlaps(pA, pB)) {
                return false;
            }
        }

        return true;
    }
}