let tasks = [];

// Render tasks
function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">
        <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggle(${index})">
        ${task.text}
      </span>
      <span>
        <button class="editBtn" onclick="editTask(${index})">Edit</button>
        <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
      </span>
    `;

    list.appendChild(li);
  });
}

// Add a new task
function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  render();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

// Toggle completed
function toggle(index) {
  tasks[index].completed = !tasks[index].completed;
  render();
}

// Edit task
function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText;
    render();
  }
}
