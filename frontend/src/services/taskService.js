const BASE_URL = "https://todo-app-backend-ck6q.onrender.com/tasks";

// GET /tasks - fetch all tasks
export async function getTasks() {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
}

// POST /tasks - create a new task
export async function addTask(task) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to add task");
  return response.json();
}

// PUT /tasks/{id} - update an existing task (e.g. toggle completed)
export async function updateTask(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
  });

  if (!response.ok) throw new Error("Failed to update task");

  return response.json();
}

// DELETE /tasks/{id} - delete a task
export async function deleteTask(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
}