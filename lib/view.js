"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marco_1 = require("./marco");
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
    View.drawCircle = function (x, y, r, color, viewType) {
        if (viewType === void 0) { viewType = marco_1.ViewType.Outline; }
        var circle = new Graphical.Circle();
        circle.setPos(x, y);
        circle.setRadius(r);
        if (viewType == marco_1.ViewType.Outline) {
            circle.setOutlineColor(color);
            circle.setOutlineWidth(1);
            circle.setColor("transparent");
        }
        else {
            circle.setColor(color);
        }
    };
    View.drawRectangle = function (leftx, lefty, width, height, color, viewType) {
        if (viewType === void 0) { viewType = marco_1.ViewType.Outline; }
        var rectangle = new Graphical.Rectangle();
        rectangle.setPos(leftx, lefty);
        rectangle.setSize(width, height);
        if (viewType == marco_1.ViewType.Outline) {
            rectangle.setOutlineColor(color);
            rectangle.setOutlineWidth(1);
            rectangle.setColor("transparent");
        }
        else {
            rectangle.setColor(color);
        }
    };
    View.drawPolygon = function (vertices, color) {
        var from;
        var to;
        var len = vertices.length;
        for (var i = 0; i < len; i++) {
            from = vertices[i % len];
            to = vertices[(i + 1) % len];
            View.drawLine(from.x, from.y, to.x, to.y, color, 1);
        }
    };
    View.drawText = function (x, y, content, color, size) {
        var text = new Graphical.Text();
        text.setText(content);
        text.setFont("bold " + size + " px Arial");
        text.setPos(x, y);
        text.setColor(color);
        text.setOutlineWidth(1);
        text.setOutlineColor(color);
    };
    return View;
}());
exports.View = View;
