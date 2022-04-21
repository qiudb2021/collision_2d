export class Vector2d {
    public x: number;
    public y: number;
    public static index: number = 1;;

    public static Create(x: number, y: number): Vector2d {
        return new Vector2d(x, y);
    }

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Vector2d.index++;
    }

    /** 向量相减 */
    public static substract(v: Vector2d, v2: Vector2d, res?: Vector2d): Vector2d {
        let x = v.x - v2.x;
        let y = v.y - v2.y;
        if (res) {
            res.x = x;
            res.y = y;
            return res;
        } else {
            return Vector2d.Create(x, y);
        }
    }

    /** 向量点积 */
    public static dot(v: Vector2d, v2: Vector2d): number {
        return v.x * v2.x + v.y * v2.y;
    }

    /** 向量模长 */
    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /** 获取单位向量 */
    public normalize(res?: Vector2d): Vector2d {
        let x = 0;
        let y = 0;
        let len = this.length();
        if (len !== 0) {
            x = this.x / len;
            y = this.y / len;
            if (res) {
                res.x = x;
                res.y;
                return res;
            } else {
                return Vector2d.Create(x, y);
            }
        } else {
            if (res) {
                res.x = x;
                res.y = y;
                return res;
            } else {
                return Vector2d.Create(x, y);
            }
        }
    }

    /** 边 */
    public edge(v: Vector2d, res?: Vector2d): Vector2d {
        return Vector2d.substract(this, v, res);
    }

    /** 法向量 */
    public perpendicular(res?: Vector2d): Vector2d {
        let x = this.y;
        let y =  0 - this.x;
        if (res) {
            res.x = x;
            res.y = y;
            return res;
        } else {
            return Vector2d.Create(x, y);
        }
    }

    /** 获取边缘法向量的单位向量（投影轴） */
    public normal(res?: Vector2d): Vector2d {
        return this.perpendicular(res).normalize(res);
    }
}