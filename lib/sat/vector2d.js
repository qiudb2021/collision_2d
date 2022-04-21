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
    /** 向量相减 */
    Vector2d.substract = function (v, v2, res) {
        var x = v.x - v2.x;
        var y = v.y - v2.y;
        if (res) {
            res.x = x;
            res.y = y;
            return res;
        }
        else {
            return Vector2d.Create(x, y);
        }
    };
    /** 向量点积 */
    Vector2d.dot = function (v, v2) {
        return v.x * v2.x + v.y * v2.y;
    };
    /** 向量模长 */
    Vector2d.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /** 获取单位向量 */
    Vector2d.prototype.normalize = function (res) {
        var x = 0;
        var y = 0;
        var len = this.length();
        if (len !== 0) {
            x = this.x / len;
            y = this.y / len;
            if (res) {
                res.x = x;
                res.y;
                return res;
            }
            else {
                return Vector2d.Create(x, y);
            }
        }
        else {
            if (res) {
                res.x = x;
                res.y = y;
                return res;
            }
            else {
                return Vector2d.Create(x, y);
            }
        }
    };
    /** 边 */
    Vector2d.prototype.edge = function (v, res) {
        return Vector2d.substract(this, v, res);
    };
    /** 法向量 */
    Vector2d.prototype.perpendicular = function (res) {
        var x = this.y;
        var y = 0 - this.x;
        if (res) {
            res.x = x;
            res.y = y;
            return res;
        }
        else {
            return Vector2d.Create(x, y);
        }
    };
    /** 获取边缘法向量的单位向量（投影轴） */
    Vector2d.prototype.normal = function (res) {
        return this.perpendicular(res).normalize(res);
    };
    Vector2d.index = 1;
    return Vector2d;
}());
exports.Vector2d = Vector2d;
