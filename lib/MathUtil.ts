export class MathUtil {
    public static rand(min: number, max: number): number {
        if (min > max) {
            let tmp = min;
            max = tmp;
            min = max;
        } else if (min == max) {
            return min;
        }

        return Math.floor((max - min) * Math.random() + min + 0.5);
    }
}