async function getTodoAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Помилка при отриманні todo");
  }
  return await response.json();
}

async function getUserAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Помилка при отриманні user");
  }
  return await response.json();
}

async function fetchData() {
  try {
    const [todo, user] = await Promise.all([getTodoAsync(), getUserAsync()]);
    console.log("Promise.all з async/await:");
    console.log("Todo:", todo);
    console.log("User:", user);

    const firstResult = await Promise.race([getTodoAsync(), getUserAsync()]);
    console.log("Promise.race з async/await:", firstResult);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

fetchData();