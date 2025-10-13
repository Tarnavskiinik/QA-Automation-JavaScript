function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Помилка при отриманні todo");
      }
      return response.json();
    });
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Помилка при отриманні user");
      }
      return response.json();
    });
}

Promise.all([getTodo(), getUser()])
  .then(results => {
    const [todo, user] = results;
    console.log("Promise.all результати:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch(error => console.error("Помилка у Promise.all:", error));

Promise.race([getTodo(), getUser()])
  .then(result => {
    console.log("Promise.race результат:", result);
  })
  .catch(error => console.error("Помилка у Promise.race:", error));