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

    /** 
     * 向量相减 - 得到边缘向量
     * */
    public static substract(v: Vector2d, v2: Vector2d, result?: Vector2d): Vector2d {
        let x = v.x - v2.x;
        let y = v.y - v2.y;
        if (result) {
            result.x = x;
            result.y = y;
            return result;
        } else {
            return Vector2d.Create(x, y, );
        }
    }

    /** 
     * 向量点积 
     * 几何意义之一：一个向量在平行于另一个向量方向上的投影的数值乘积
     * 此处用来计算出投影的长度
     * */
    public static dot(v: Vector2d, v2: Vector2d): number {
        return v.x * v2.x + v.y * v2.y;
    }

    /** 向量大小（向量的模），即两点间距离 */
    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /** 获取单位向量 */
    public normalize(isNew: boolean = true): Vector2d {
        let x = 0;
        let y = 0;
        let len = this.length();
        if (len !== 0) {
            x = this.x / len;
            y = this.y / len;
            if (isNew) {
                return Vector2d.Create(x, y);
            } else {
                this.x = x;
                this.y = y;
                return this;
            }
        } else {
            if (isNew) {
                return Vector2d.Create(x, y);
            } else {
                this.x = x;
                this.y = y;
                return this;
            }
        }
    }

    /** 边缘向量 */
    public edge(v: Vector2d): Vector2d {
        return Vector2d.substract(this, v);
    }

    /** 当前向量的法向量(x, y) -> (y, -x)或(-y, x) */
    public perpendicular(isNew: boolean = true): Vector2d {
        let x = this.y;
        let y =  0 - this.x;
        if (isNew) {
            return Vector2d.Create(x, y);
        } else {
            this.x = x;
            this.y = y;
            return this;
        }
    }
}