var tasks = [];

function addTask() {
  var input = document.getElementById("taskInput");
  var categorySelect = document.getElementById("categorySelect");
  var deadlineInput = document.getElementById("deadlineInput");
  var prioritySelect = document.getElementById("prioritySelect");

  var task = input.value.trim();
  var category = categorySelect.value;
  var deadline = deadlineInput.value;
  var priority = prioritySelect.value;

  if (task !== "" && category !== "default" && priority !== "default") {
    var newTask = {
      task: task,
      category: category,
      deadline: deadline,
      priority: priority,
      completed: false
    };

    tasks.push(newTask);
    renderTasks();

    input.value = "";
    categorySelect.value = "default";
    deadlineInput.value = "";
    prioritySelect.value = "default";
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];

    var row = document.createElement("tr");

    var taskCell = document.createElement("td");
    taskCell.textContent = task.task;
    row.appendChild(taskCell);

    var categoryCell = document.createElement("td");
    categoryCell.textContent = task.category;
    row.appendChild(categoryCell);

    var deadlineCell = document.createElement("td");
    deadlineCell.textContent = task.deadline;
    row.appendChild(deadlineCell);

    var priorityCell = document.createElement("td");
    priorityCell.textContent = task.priority;
    row.appendChild(priorityCell);

    var statusCell = document.createElement("td");
    var statusButton = document.createElement("button");
    statusButton.textContent = task.completed ? "Done" : "Undone";
    statusButton.addEventListener("click", toggleTaskCompletion.bind(null, i));
    statusCell.appendChild(statusButton);
    row.appendChild(statusCell);

    if (task.completed) {
      row.classList.add("completed-task");
    }

    taskList.appendChild(row);
  }
}
