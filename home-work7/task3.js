function divide(numerator, denominator){

    if(typeof numerator !== "number" || typeof denominator !== "number"){
        throw new Error("Обидва аргументи повинні бути числами");
    }

    if(denominator === 0){
        throw new Error("Ділення на нуль заборонено");
    }


    return numerator  / denominator

}

try {
    console.log("Результат:", divide(10, 2));
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Результат:", divide(8, 0));
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Результат:", divide("10", 2));
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Результат:", divide(15, "5"));
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}
