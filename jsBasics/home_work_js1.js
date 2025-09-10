//1
let myString = "Hello word";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;


console.log("Рядок:", myString);
console.log("Число:", myNumber);
console.log("Булеве значення:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);

//2
const nameM = "Ivan";
const nameW = "Maria"

let greetingConcat = "Привіт, " + nameM + " і " + nameW + "!";
console.log("Конкатенація:", greetingConcat);

let greetingTemplate = `Привіт, ${nameM} і ${nameW}!`;
console.log("Шаблонний рядок:", greetingTemplate);

//3

const age = 20;
const isAdult = age >= 18;

console.log("Вік:", age);
console.log("Чи повнолітній:", isAdult);

//4

let radiusCircle = 5;
let areaCircle = Math.PI * Math.pow(radiusCircle, 2);
console.log("Площа кола:", areaCircle.toFixed(2));

//5

let length = 10;
let width = 6;
let areaRectangle = length * width;
console.log("Площа прямокутника:", areaRectangle.toFixed(2));

//6
let radiusCylinder = 3;
let heightCylinder = 8;
let volumeCylinder = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;
console.log("Об'єм циліндра:", volumeCylinder.toFixed(2));