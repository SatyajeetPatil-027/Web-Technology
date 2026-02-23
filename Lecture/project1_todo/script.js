// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filters = document.querySelectorAll(".filter");
const prioritySelect = document.getElementById("prioritySelect");
const dueDate = document.getElementById("dueDate");
const taskCounter = document.getElementById("taskCounter");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Display tasks
function displayTasks(filter = "all") {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        if (filter === "completed" && !task.completed) return;
        if (filter === "pending" && task.completed) return;

        const li = document.createElement("li");
        li.classList.add(task.priority);

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <div class="task-top">
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
            <small>Due: ${task.dueDate || "No date"}</small>
        `;

        // Complete button
        li.querySelector(".complete-btn").addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            displayTasks(filter);
        });

        // Delete button
        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks(filter);
        });

        taskList.appendChild(li);
    });

    taskCounter.textContent = tasks.length + " Tasks";
}

// Add task
addTaskBtn.addEventListener("click", () => {

    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = {
        text: text,
        completed: false,
        priority: prioritySelect.value,
        dueDate: dueDate.value
    };

    tasks.push(newTask);
    saveTasks();
    displayTasks();

    taskInput.value = "";
    dueDate.value = "";
});

// Enter key support
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});

// Filter buttons
filters.forEach(button => {
    button.addEventListener("click", () => {

        document.querySelector(".filter.active").classList.remove("active");
        button.classList.add("active");

        displayTasks(button.dataset.filter);
    });
});

// Initial display
displayTasks();
