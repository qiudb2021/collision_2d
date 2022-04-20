"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graphical = require("graphical");
var View = /** @class */ (function () {
    function View() {
    }
    View.drawLine = function (x0, y0, x1, y1, color, width) {
        var line = new Graphical.Line();
        line.setPos(x0, y0);
        line.setPos2(x1, y1);
        line.setColor(color);
        line.setWidth(width);
    };
    View.drawCircle = function (x, y, r, color) {
        var circle = new Graphical.Circle();
        circle.setPos(x, y);
        circle.setRadius(r);
        circle.setColor(color);
    };
    View.drawRectangle = function (leftx, lefty, width, height, color) {
        var rectangle = new Graphical.Rectangle();
        rectangle.setPos(leftx, lefty);
        rectangle.setSize(width, height);
        rectangle.setColor(color);
    };
    return View;
}());
exports.View = View;
