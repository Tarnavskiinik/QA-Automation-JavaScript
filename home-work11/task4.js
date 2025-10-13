class TodoService {
  async getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) throw new Error("Помилка при отриманні todo");
    return await response.json();
  }
}

class UserService {
  async getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("Помилка при отриманні user");
    return await response.json();
  }
}

async function run() {
  const todoService = new TodoService();
  const userService = new UserService();

  try {
    const [todo, user] = await Promise.all([
      todoService.getTodo(),
      userService.getUser(),
    ]);

    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

run();