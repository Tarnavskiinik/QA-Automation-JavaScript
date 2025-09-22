function areaOfRectangleDecl(width, height){
    return width * height;
}

console.log("Declaration:", areaOfRectangleDecl(4, 7))


const areaOfRectangleExpr  = function(width, height){
    return width * height;
}

console.log("Expression:", areaOfRectangleExpr(3, 5))


const areaOfRectangleArrow  = (width, height) => width * height;

console.log("Arrow:", areaOfRectangleArrow(15, 8))