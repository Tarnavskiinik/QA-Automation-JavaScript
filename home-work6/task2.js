function checkIsAdultDecl(age){
    return age >= 18
}

console.log("25 років:", checkIsAdultDecl(25));
console.log("15 років:", checkIsAdultDecl(15));
console.log("18 років:", checkIsAdultDecl(18));


const checkIsAdultExpr = function (age){
    return age >= 18
}

console.log("25 років:", checkIsAdultExpr(25));
console.log("15 років:", checkIsAdultExpr(15));
console.log("18 років:", checkIsAdultExpr(18));

const checkIsAdultArrow = (age) => age >= 18;

console.log("25 років:", checkIsAdultArrow(25));
console.log("15 років:", checkIsAdultArrow(15));
console.log("18 років:", checkIsAdultArrow(18));