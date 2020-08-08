/*
 * Project Name: geometryJS
 * Author      : joshuaw001
 * Discription : a geometry library for html5 canvas, made with javascript.
 * Version     : v1.1 beta
 * See Also    : algebraJS
 */
fuction blank(){}
blank_string = ""

class BaseStyle {
    
    constructor(options={}) {
        this.options = options
        this.required_options = []
    }
    defaults() {
        return []
    }
}

class Construction {
    constructor(style=ConstructionStyleObject()) {
        this.styleobject = style
        this.width       = style.width
        this.height      = style.height
        
}
