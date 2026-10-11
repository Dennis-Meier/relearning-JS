const form = document.forms["add-task"];
const taskList = document.getElementById("task-list");
const taskDisplay = document.getElementById("tasks")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = form.elements["task"];
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Name must be filled out");
        return;
    }

    const item = document.createElement("li");
    item.textContent = taskText;
    taskList.append(item);
    input.value = "";
});
