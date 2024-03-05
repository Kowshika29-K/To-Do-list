// Function to add a new task
function addTask() {
    var newTaskInput = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");

    if (newTaskInput.value.trim() !== "") {
        var taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = newTaskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(taskItem);
        newTaskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
