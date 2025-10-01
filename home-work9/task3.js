const car1 = {
    brand: "BMW",
    model: "x3",
    year: "2003"
}

const car2 = {
    brand: "Mercedes",
    model: "glc300",
    owner: "Piter"
}

const car3 = {
    ...car1,
    ...car2
}

console.log(car3)