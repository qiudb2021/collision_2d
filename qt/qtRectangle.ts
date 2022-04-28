export class qtRectangle {
    public x: number;
    public y: number;
    public w: number;
    public h: number;

    public static Create(x: number, y: number, w: number, h: number): qtRectangle {
        return new qtRectangle(x, y, w, h);
    }

    protected constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}