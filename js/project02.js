const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks
function renderTasks(filter = "all") {
  todoList.innerHTML = "";
  const filteredTasks = tasks.filter(task =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = `todo-item`;
    taskItem.draggable = true;
    taskItem.dataset.index = index;

    taskItem.innerHTML = `
      <div>
        <input type="checkbox" class="complete-checkbox" ${
          task.completed ? "checked" : ""
        } />
        <span>${index + 1}. ${task.text}</span>
      </div>
      <div class="actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Toggle task completion with checkbox
    taskItem.querySelector(".complete-checkbox").addEventListener("change", e => {
      tasks[index].completed = e.target.checked;
      saveTasks();
      renderTasks(filter);
    });

    // Edit task
    taskItem.querySelector(".edit-btn").addEventListener("click", e => {
      e.stopPropagation();
      const newText = prompt("Edit Task:", task.text);
      if (newText) {
        tasks[index].text = newText;
        saveTasks();
        renderTasks(filter);
      }
    });

    // Delete task
    taskItem.querySelector(".delete-btn").addEventListener("click", e => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks(filter);
    });

    // Drag and drop
    taskItem.addEventListener("dragstart", () => {
      taskItem.classList.add("dragging");
    });
    taskItem.addEventListener("dragend", () => {
      taskItem.classList.remove("dragging");
      reorderTasks();
    });

    todoList.appendChild(taskItem);
  });
}

// Reorder tasks after drag-and-drop
function reorderTasks() {
  const reorderedTasks = Array.from(todoList.children).map(item => {
    return tasks[item.dataset.index];
  });
  tasks = reorderedTasks;
  saveTasks();
  renderTasks();
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
});

// Filter tasks
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderTasks(button.dataset.filter);
  });
});

// Drag-and-drop functionality
todoList.addEventListener("dragover", e => {
  e.preventDefault();
  const afterElement = getDragAfterElement(todoList, e.clientY);
  const draggingItem = document.querySelector(".dragging");
  if (afterElement == null) {
    todoList.appendChild(draggingItem);
  } else {
    todoList.insertBefore(draggingItem, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".todo-item:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// Initialize app
renderTasks();
