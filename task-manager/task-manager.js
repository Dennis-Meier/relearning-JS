const task = document.getElementById("task")
const addTaskButton = document.getElementById("add-task")
const taskList = document.getElementById("task-list")

addTaskButton.addEventListener("click", function () {
    const taskContent = task.value;
    console.log(taskContent)
});

