function checkOrderDecl(available, ordered) {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty";
    } else {
        return "Your order is accepted";
    }
}

console.log(checkOrderDecl(150, 35));
console.log(checkOrderDecl(100, 150));
console.log(checkOrderDecl(50, 0));


const checkOrderExpr = function (available, ordered){
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty";
    } else {
        return "Your order is accepted";
    }
}

console.log(checkOrderExpr(148, 40));
console.log(checkOrderExpr(110, 150));
console.log(checkOrderExpr(70, 0));


const checkOrderArrow = (available, ordered) => {
        if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty";
    } else {
        return "Your order is accepted";
    }
}


console.log(checkOrderArrow(135, 45));
console.log(checkOrderArrow(90, 140));
console.log(checkOrderArrow(30, 0));