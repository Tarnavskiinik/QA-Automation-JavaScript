function printTextWithDelay(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

printTextWithDelay("Привіт, це повідомлення з затримкою!", 2000);