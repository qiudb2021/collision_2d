import { Shap } from "../lib/shap/shap";
import { Rectangle } from "../lib/shap/rectangle";
import { Point } from "../lib/sat/point";
import { qtRectangle } from "./qtRectangle";
import { SATCircle } from "../lib/sat/satCircle";
import { ShapType, COLORS, ViewType } from "../lib/marco";
import { Circle } from "../lib/shap/circle";
import { View } from "../lib/view";
import { SATPolygon } from "../lib/sat/satPolygon";

export class QuadTree {

    public static Create(level: number, bounds: qtRectangle) {
        return new QuadTree(level, bounds);
    }

    /** 一个区域节点在被划分之前能够拥有物体的最大数量 */
    public static MAX_OBJECTS: number = 2;
    /** 子节点的最大深度 */
    public static MAX_LEVELS: number = 5;
    /** 当前节点深度，对自己来说level为0 */
    private level: number;
    /** 区域边界（矩形）即当前节点所有的2D空间 */
    private bounds: qtRectangle;
    /** 物体数组(SATCircle或SATPolygon) */
    private objects: Shap[];
    /** 四个子节点 */
    private nodes: QuadTree[];

    public constructor(level: number, bounds: qtRectangle) {
        this.level = level || 0;
        this.bounds = bounds;
        this.objects = [];
        this.nodes = [];
    }

    public insert(shap: Shap) {
        let i = 0;
        let indexes: number[] = [];

        // if we have subnode, call insert on matching subnodes
        if (this.nodes.length) {
            indexes = this.getIndex(shap);
            for (let i = 0; i < indexes.length; i++) {
                this.nodes[indexes[i]].insert(shap);
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
                for (let j = 0; j < indexes.length; j++) {
                    this.nodes[indexes[j]].insert(this.objects[i]);
                }
            }

            // clean up this node.
            this.objects = [];
        }
    }

    public view(): void {
        let color = this.getColorByLevel();
        if (this.nodes.length) {
            // 先画出四个象限
            View.drawLine(this.bounds.x, this.bounds.y + this.bounds.h/2, this.bounds.x + this.bounds.w, this.bounds.y + this.bounds.h/2, color, 1);
            View.drawLine(this.bounds.x + this.bounds.w/2, this.bounds.y, this.bounds.x + this.bounds.w/2, this.bounds.y + this.bounds.h, color, 1)
        }
        // 再画出物体
        this.objects.forEach(obj => {
            obj.view(color, ViewType.Outline);
        });

        this.nodes.forEach(node => {
            node.view(); 
        });
    }

    /** 用于判断物体属于哪个子节点*/
    private getIndex(shap: Shap): number[] {
        let indexes: number[] = [];
        // bounds的中心点
        let midX = this.bounds.x + this.bounds.w / 2;
        let midY = this.bounds.y + this.bounds.h / 2;

        let x: number;
        let y: number;
        let width: number;
        let height: number;

        switch(shap.type) {
            case ShapType.SATCircle:
            case ShapType.Circle:
                let circle = <Circle>shap
                x = circle.x - circle.r;
                y = circle.y - circle.r;
                width = height = 2 * circle.r;
                break;
            case ShapType.SATPolygon:
                let satPolygon = <SATPolygon>shap;
                let aabb = satPolygon.getAABB();
                x = aabb.lTop.x;
                y = aabb.lTop.y;
                width = aabb.rButtom.x - x;
                height = aabb.rButtom.y - y;
                break;
            default:
                console.error("no support the shap(%j) add to quadtree", shap);
                return <number[]><unknown>null;
        }

        let startIsNorth: boolean = y < midY;
        let startIsWest: boolean = x < midX;
        let endIsEast: boolean = x + width > midX;
        let endIsSouth: boolean = y + height > midY;

        if (startIsNorth && endIsEast) indexes.push(0);

        if (startIsWest && startIsNorth) indexes.push(1);

        if (startIsWest && endIsSouth) indexes.push(2);

        if (endIsEast && endIsSouth) indexes.push(3);

        return indexes;

    }

    /** split the node to 4 subnodes */
    private split(): void {
        let nextLevel = this.level + 1;
        let subWidth = this.bounds.w / 2;
        let subHeight = this.bounds.h / 2;
        let x = this.bounds.x;
        let y = this.bounds.y;

        // 第1象限 - top right node
        this.nodes[0] = new QuadTree(nextLevel, qtRectangle.Create(
            x + subWidth,
            y,
            subWidth,
            subHeight,
        ));

        // 第2象限 - top left node
        this.nodes[1] = new QuadTree(nextLevel, qtRectangle.Create(
            x,
            y,
            subWidth,
            subHeight,
        ));

        // 第3象限 - buttom left node
        this.nodes[2] = new QuadTree(nextLevel, qtRectangle.Create(
            x,
            y + subHeight,
            subWidth,
            subHeight,
        ));

        // 第4象限 - buttom right node
        this.nodes[3] = new QuadTree(nextLevel, qtRectangle.Create(
            x + subWidth,
            y + subHeight,
            subWidth,
            subHeight,
        ));
    }


    private getColorByLevel(): COLORS {
        let color: COLORS = COLORS.Black;
        switch (this.level) {
            case 1:
                color = COLORS.Black;
                break;
            case 2:
                color = COLORS.Brown;
                break;
            case 3:
                color = COLORS.Blue;
                break;
            case 4:
                color = COLORS.Green;
                break;
            case 5:
                color = COLORS.Yellow;
                break;
            default:
                color = COLORS.Red;
                break;
        }
        return color;
    }
}