"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qtRectangle_1 = require("./qtRectangle");
var marco_1 = require("../lib/marco");
var view_1 = require("../lib/view");
var QuadTree = /** @class */ (function () {
    function QuadTree(level, bounds) {
        this.level = level || 0;
        this.bounds = bounds;
        this.objects = [];
        this.nodes = [];
    }
    QuadTree.Create = function (level, bounds) {
        return new QuadTree(level, bounds);
    };
    QuadTree.prototype.insert = function (shap) {
        var i = 0;
        var indexes = [];
        // if we have subnode, call insert on matching subnodes
        if (this.nodes.length) {
            indexes = this.getIndex(shap);
            for (var i_1 = 0; i_1 < indexes.length; i_1++) {
                this.nodes[indexes[i_1]].insert(shap);
            }
            return;
        }
        // otherwise, store object here
        this.objects.push(shap);
        // max_objects reached.
        if (this.objects.length > QuadTree.MAX_OBJECTS && this.level < QuadTree.MAX_LEVELS) {
            // split if we don't already have subnodes
            if (!this.nodes.length) {
                this.split();
            }
            // add all objects to their ccorresponding subnode
            for (i = 0; i < this.objects.length; i++) {
                indexes = this.getIndex(this.objects[i]);
                for (var j = 0; j < indexes.length; j++) {
                    this.nodes[indexes[j]].insert(this.objects[i]);
                }
            }
            // clean up this node.
            this.objects = [];
        }
    };
    QuadTree.prototype.view = function () {
        var color = this.getColorByLevel();
        if (this.nodes.length) {
            // 先画出四个象限
            view_1.View.drawLine(this.bounds.x, this.bounds.y + this.bounds.h / 2, this.bounds.x + this.bounds.w, this.bounds.y + this.bounds.h / 2, color, 1);
            view_1.View.drawLine(this.bounds.x + this.bounds.w / 2, this.bounds.y, this.bounds.x + this.bounds.w / 2, this.bounds.y + this.bounds.h, color, 1);
        }
        // 再画出物体
        this.objects.forEach(function (obj) {
            obj.view(color, marco_1.ViewType.Outline);
        });
        this.nodes.forEach(function (node) {
            node.view();
        });
    };
    /** 用于判断物体属于哪个子节点*/
    QuadTree.prototype.getIndex = function (shap) {
        var indexes = [];
        // bounds的中心点
        var midX = this.bounds.x + this.bounds.w / 2;
        var midY = this.bounds.y + this.bounds.h / 2;
        var x;
        var y;
        var width;
        var height;
        switch (shap.type) {
            case marco_1.ShapType.SATCircle:
            case marco_1.ShapType.Circle:
                var circle = shap;
                x = circle.x - circle.r;
                y = circle.y - circle.r;
                width = height = 2 * circle.r;
                break;
            case marco_1.ShapType.SATPolygon:
                var satPolygon = shap;
                var aabb = satPolygon.getAABB();
                x = aabb.lTop.x;
                y = aabb.lTop.y;
                width = aabb.rButtom.x - x;
                height = aabb.rButtom.y - y;
                break;
            default:
                console.error("no support the shap(%j) add to quadtree", shap);
                return null;
        }
        var startIsNorth = y < midY;
        var startIsWest = x < midX;
        var endIsEast = x + width > midX;
        var endIsSouth = y + height > midY;
        if (startIsNorth && endIsEast)
            indexes.push(0);
        if (startIsWest && startIsNorth)
            indexes.push(1);
        if (startIsWest && endIsSouth)
            indexes.push(2);
        if (endIsEast && endIsSouth)
            indexes.push(3);
        return indexes;
    };
    /** split the node to 4 subnodes */
    QuadTree.prototype.split = function () {
        var nextLevel = this.level + 1;
        var subWidth = this.bounds.w / 2;
        var subHeight = this.bounds.h / 2;
        var x = this.bounds.x;
        var y = this.bounds.y;
        // 第1象限 - top right node
        this.nodes[0] = new QuadTree(nextLevel, qtRectangle_1.qtRectangle.Create(x + subWidth, y, subWidth, subHeight));
        // 第2象限 - top left node
        this.nodes[1] = new QuadTree(nextLevel, qtRectangle_1.qtRectangle.Create(x, y, subWidth, subHeight));
        // 第3象限 - buttom left node
        this.nodes[2] = new QuadTree(nextLevel, qtRectangle_1.qtRectangle.Create(x, y + subHeight, subWidth, subHeight));
        // 第4象限 - buttom right node
        this.nodes[3] = new QuadTree(nextLevel, qtRectangle_1.qtRectangle.Create(x + subWidth, y + subHeight, subWidth, subHeight));
    };
    QuadTree.prototype.getColorByLevel = function () {
        var color = marco_1.COLORS.Black;
        switch (this.level) {
            case 1:
                color = marco_1.COLORS.Black;
                break;
            case 2:
                color = marco_1.COLORS.Brown;
                break;
            case 3:
                color = marco_1.COLORS.Blue;
                break;
            case 4:
                color = marco_1.COLORS.Green;
                break;
            case 5:
                color = marco_1.COLORS.Yellow;
                break;
            default:
                color = marco_1.COLORS.Red;
                break;
        }
        return color;
    };
    /** 一个区域节点在被划分之前能够拥有物体的最大数量 */
    QuadTree.MAX_OBJECTS = 2;
    /** 子节点的最大深度 */
    QuadTree.MAX_LEVELS = 5;
    return QuadTree;
}());
exports.QuadTree = QuadTree;
