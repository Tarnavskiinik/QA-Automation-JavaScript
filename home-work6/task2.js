function verificationDecl(age){
    return age >= 18
}

console.log("25 років:", verificationDecl(25));
console.log("15 років:", verificationDecl(15));
console.log("18 років:", verificationDecl(18));


const verificationExpr = function (age){
    return age >= 18
}

console.log("25 років:", verificationExpr(25));
console.log("15 років:", verificationExpr(15));
console.log("18 років:", verificationExpr(18));

const verificationArrow = (age) => age >= 18;

console.log("25 років:", verificationArrow(25));
console.log("15 років:", verificationArrow(15));
console.log("18 років:", verificationArrow(18));