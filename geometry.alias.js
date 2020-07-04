

class ObjectStyle{
  constructor(objecttype,options){
    this.configs = options
    switch(objecttype){
      case "point":
        this.fgcolor = options["fgcolor"]
        this.for     = "Point"
      case "segment":
        this.segmentcolor  = options["fgcolor"]
        this.endpointcolor = options["bgcolor"]
        this.for           = "Segment"
      case "ray":
        this.endpointcolor = options[""]
    this.colors  = options["colors"]
    this.fgcolor = options["colors"]["fg"]
    this.bgcolor = options["colors"]["bg"]
    this.size    = options["size"]
    this.width   = options["size"]["width"]
    this.height  = options["size"]["height"]
    this.dash    = options["dash"]
  }
}

class PredefinedLiterals{
  //to do later//
class Point{
  const ORIGIN = [0,0]
  constructor(coords,master=null,style=ObjectStyle.DEFAULT){
    this.x = coords[0]
    this.y = coords[1]
    this.//later
  }
}
