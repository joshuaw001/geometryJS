//name------->geometryJS:
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
    
}
