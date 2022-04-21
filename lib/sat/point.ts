export class Point {
    public x: number;
    public y: number;

    public static Create(x: number, y: number): Point {
        return new Point(x, y);
    }

    protected constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}