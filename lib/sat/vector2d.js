"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2d = /** @class */ (function () {
    function Vector2d(x, y) {
        this.x = x;
        this.y = y;
        // Vector2d.index++;
    }
    ;
    Vector2d.Create = function (x, y) {
        return new Vector2d(x, y);
    };
    /**
     * 向量相减 - 得到边缘向量
     * */
    Vector2d.substract = function (v, v2, result) {
        var x = v.x - v2.x;
        var y = v.y - v2.y;
        if (result) {
            result.x = x;
            result.y = y;
            return result;
        }
        else {
            return Vector2d.Create(x, y);
        }
    };
    /**
     * 向量点积
     * 几何意义之一：一个向量在平行于另一个向量方向上的投影的数值乘积
     * 此处用来计算出投影的长度
     * */
    Vector2d.dot = function (v, v2) {
        return v.x * v2.x + v.y * v2.y;
    };
    /** 向量大小（向量的模），即两点间距离 */
    Vector2d.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /** 获取单位向量 */
    Vector2d.prototype.normalize = function (isNew) {
        if (isNew === void 0) { isNew = true; }
        var x = 0;
        var y = 0;
        var len = this.length();
        if (len !== 0) {
            x = this.x / len;
            y = this.y / len;
            if (isNew) {
                return Vector2d.Create(x, y);
            }
            else {
                this.x = x;
                this.y = y;
                return this;
            }
        }
        else {
            if (isNew) {
                return Vector2d.Create(x, y);
            }
            else {
                this.x = x;
                this.y = y;
                return this;
            }
        }
    };
    /** 边缘向量 */
    Vector2d.prototype.edge = function (v) {
        return Vector2d.substract(this, v);
    };
    /** 当前向量的法向量(x, y) -> (y, -x)或(-y, x) */
    Vector2d.prototype.perpendicular = function (isNew) {
        if (isNew === void 0) { isNew = true; }
        var x = this.y;
        var y = 0 - this.x;
        if (isNew) {
            return Vector2d.Create(x, y);
        }
        else {
            this.x = x;
            this.y = y;
            return this;
        }
    };
    Vector2d.index = 1;
    return Vector2d;
}());
exports.Vector2d = Vector2d;
