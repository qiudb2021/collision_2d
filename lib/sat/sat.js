"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector2d_1 = require("./vector2d");
var projection_1 = require("./projection");
var SAT = /** @class */ (function () {
    function SAT() {
    }
    SAT.instance = function () {
        return SAT.sat || (SAT.sat = new SAT());
    };
    SAT.collide = function (polygonA, polygonB) {
        // 粗略碰撞
        // if (!polygonA.getAABB().collidesWith(polygonB.getAABB())) {
        //     // 没有碰撞
        //     // console.log("粗略阶段没有碰撞，不需要使用SAT")
        //     return false;
        // }
        // 依次获取ploygonA的投影轴，获取polygonA、polygonB在该投影轴上的投影
        var axis = new vector2d_1.Vector2d(0, 0);
        // 投影范围
        var pA = projection_1.Projection.Create(0, 0);
        var pB = projection_1.Projection.Create(0, 0);
        var v = new vector2d_1.Vector2d(0, 0);
        var v1 = new vector2d_1.Vector2d(0, 0);
        var v2 = new vector2d_1.Vector2d(0, 0);
        // let count: number = 0;
        for (var i = 0; i < polygonA.vertices.length; i++) {
            // count++;
            // 投影轴
            polygonA.getAxis(i, axis, v1, v2);
            // 多边形A、B在投影轴上的投影范围pA、pB
            polygonA.project(axis, pA, v);
            polygonB.project(axis, pB, v);
            //  // 判断投影轴上的投影是否存在重叠，若检测到存在间隙则立刻退出判断，消除不必要的运算
            if (!projection_1.Projection.overlaps(pA, pB)) {
                // console.log("在polygonA顶点%j的分离轴上的投影没有重叠，共检测了%j个分离轴", polygonA.vertices[i], count)
                return false;
            }
        }
        for (var i = 0; i < polygonB.vertices.length; i++) {
            // count++;
            // 投影轴
            polygonA.getAxis(i, axis, v1, v2);
            // 多边形A、B在投影轴上的投影范围pA、pB
            polygonA.project(axis, pA, v);
            polygonB.project(axis, pB, v);
            //  // 判断投影轴上的投影是否存在重叠，若检测到存在间隙则立刻退出判断，消除不必要的运算
            if (!projection_1.Projection.overlaps(pA, pB)) {
                // console.log("在polygonB的顶点%j与顶点%j的分离轴上的投影没有重叠，共检测了%j个分离轴", polygonB.vertices[i], count)
                return false;
            }
        }
        // console.log("总共检测了%d个分离轴", count)
        return true;
    };
    SAT.collideCircleWithPolygon = function (circle, polygon) {
        // 圆的投影轴与多边形
        var axis = new vector2d_1.Vector2d(0, 0);
        // 投影范围
        var pA = projection_1.Projection.Create(0, 0);
        var pB = projection_1.Projection.Create(0, 0);
        var v = new vector2d_1.Vector2d(0, 0);
        var v1 = new vector2d_1.Vector2d(0, 0);
        var v2 = new vector2d_1.Vector2d(0, 0);
        circle.getAxis(polygon.vertices, axis, v1, v2);
        polygon.project(axis, pA, v);
        circle.project(axis, pB, v);
        if (!projection_1.Projection.overlaps(pA, pB)) {
            return false;
        }
        // 多边形投影轴与圆
        for (var i = 0; i < polygon.vertices.length; i++) {
            polygon.getAxis(i, axis, v1, v2);
            polygon.project(axis, pA, v);
            circle.project(axis, pB, v);
            if (!projection_1.Projection.overlaps(pA, pB)) {
                return false;
            }
        }
        return true;
    };
    return SAT;
}());
exports.SAT = SAT;
