/**
 * Projection Class
 * 投影在投影轴上的范围
 */
export class Projection {
    public min: number;
    public max: number;

    public static Create(min: number, max: number): Projection {
        return new Projection(min, max);
    }

    /** 判断范围是否重叠 */
    public static overlaps(pA: Projection, pB: Projection): boolean {
        return pA.max > pB.min && pB.max > pA.min;
    }

    protected constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }
}