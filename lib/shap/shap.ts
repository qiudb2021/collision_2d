import { ShapType, ViewType, COLORS } from "../marco";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Polygon } from "./polygon";

/**
 * 碰撞图形基类
 */
 export abstract class Shap {
    public type: ShapType;

    public constructor(type: ShapType) {
        this.type = type;
    }

    public abstract view(color: COLORS, type: ViewType): void;

    /** 判断图形开关 */
    public isType(shapType: ShapType): boolean {
        return this.type === shapType;
    }

    public collidesWith(shap: Shap): boolean {
        // 圆形与圆形碰撞
        if (this.isType(ShapType.Circle) && shap.isType(ShapType.Circle)) {
            return Shap.circleWithCircle(<Circle><unknown>this, <Circle>shap)
        } else if (this.isType(ShapType.Rectangle) && shap.isType(ShapType.Rectangle)) {
            return Shap.rectangleWithRectangle(<Rectangle><unknown>this, <Rectangle>shap)
        }
        return false;
    }

    /** 圆形与圆形碰撞 */
    protected static circleWithCircle(c: Circle, c2: Circle): boolean {
        return (c.x - c2.x) * (c.x - c2.x) + (c.y - c2.y) * (c.y - c2.y) <= (c.r + c2.r) * (c.r + c2.r);
    }

    /** 任意两个（无旋转）矩形碰撞检测 */
    protected static rectangleWithRectangle(rectA: Rectangle, rectB: Rectangle): boolean {
        return (rectA.leftX < rectB.leftX + rectB.width &&
            rectA.leftX + rectA.width > rectB.leftX &&
            rectA.leftY < rectB.leftY + rectB.height &&
            rectA.leftY + rectA.height > rectB.leftY)
        
    }

    protected static circleWithRectangle(circle: Circle, rect: Rectangle): boolean {
        return false;
    }

    protected static polygonWithPolygon(polygon: Polygon, polygon2: Polygon): boolean {
        return false;
    }
};