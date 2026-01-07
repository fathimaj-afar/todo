const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create <li>
    const li = document.createElement("li");
    li.className = "list-group-item";

    // Task text
    const span = document.createElement("span");
    span.innerText = taskText;

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "✓";
    toggleBtn.className = "btn btn-sm btn-warning me-2";

    toggleBtn.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Button group
    const btnGroup = document.createElement("div");
    btnGroup.appendChild(toggleBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);

    taskInput.value = "";
});
