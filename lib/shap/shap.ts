import { ShapType } from "./marco";
import { Circle } from "./circle";

/**
 * 碰撞图形基类
 */
 export abstract class Shap {
    public type: ShapType;

    public constructor(type: ShapType) {
        this.type = type;
    }

    public abstract view(): void;

    /** 判断图形开关 */
    public isType(shapType: ShapType): boolean {
        return this.type === shapType;
    }

    public collidesWith(shap: Shap): boolean {
        // 圆形与圆形碰撞
        if (this.isType(ShapType.Circle) && shap.isType(ShapType.Circle)) {
            return Shap.circleWithCircle(<Circle><unknown>this, <Circle>shap)
        }
        return false;
    }

    /** 圆形与圆形碰撞 */
    protected static circleWithCircle(c: Circle, c2: Circle): boolean {
        console.log((c.x - c2.x) * (c.x - c2.x) + (c.y - c2.y) * (c.y - c2.y))
        console.log((c.r + c2.r) * (c.r + c2.r))
        return (c.x - c2.x) * (c.x - c2.x) + (c.y - c2.y) * (c.y - c2.y) <= (c.r + c2.r) * (c.r + c2.r);
    }
};