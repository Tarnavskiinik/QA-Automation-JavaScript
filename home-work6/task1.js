function calculateRectangleAreaDecl(width, height){
    return width * height;
}

console.log("Declaration:", calculateRectangleAreaDecl(4, 7))


const calculateRectangleAreaExpr  = function(width, height){
    return width * height;
}

console.log("Expression:", calculateRectangleAreaExpr(3, 5))


const calculateRectangleAreaArrow  = (width, height) => width * height;

console.log("Arrow:", calculateRectangleAreaArrow(15, 8))