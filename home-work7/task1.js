function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

function handleNumber(number, onEven, onOdd) {
    if (number % 2 === 0) {
        onEven();
    } else {
        onOdd();
    }
}

handleNumber(13, handleEven, handleOdd);
handleNumber(10, handleEven, handleOdd);