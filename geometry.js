//name------->geometryJS
//author----->joshuaw001
//type------->API
//designer--->joshuaw001
//language--->javascript
//use-------->HTML5 canvas
//developer-->joshuaw001
//storage---->github
//file------->geometry.js
//specialty-->geometry

class Square {
    constructor(side) {
        this.length = side
    }
    function findArea() {
        return this.length * this.length
    }
    function findSideLength() {
        return math.sqrt(this.findArea())
    }
    function findPerimeter() {
        return this.length * 2
    }
}

class Circle {
    constructor(r) {
        this.radius   = r
        this.diameter = this.radius * 2
        this.pi       = 3.14159265358979
        this.tau      = this.pi * 2
        this.perfect  = true
    }
    function findRadius() {
        return this.radius
    }
    function findArea() {
        return (this.pi * (this.findRadius() * this.findRadius()))
    }
    function findDiameter() {
        return this.diameter
    }
    function findCircumference() {
        return this.pi * this.findDiameter()
    }
}
