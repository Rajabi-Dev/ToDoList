export function showMessage(text = "TEST MESSAGE", type = "error") {
    const msgBox = document.createElement("div");
    msgBox.className = `message-box ${type}`;
    const icon = document.createElement("span");
    icon.className = "message-box__icon";
    icon.innerHTML = {
        success: "✔️",
        error: "❌",
        warning: "⚠️",
        info: "ℹ️",
    }[type] || "ℹ️";

    const closeBtn = document.createElement("span");
    closeBtn.className = "message-box__close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = () => msgBox.remove();
    msgBox.appendChild(icon);
    msgBox.appendChild(document.createTextNode(text));
    msgBox.appendChild(closeBtn);
    document.body.appendChild(msgBox);
    setTimeout(() => msgBox.classList.add("show"), 10);
    setTimeout(() => {
        msgBox.classList.remove("show");
        setTimeout(() => msgBox.remove(), 400);
    }, 4000);
}
export function createTaskElement(taskText, taskStatus, taskId, location) {

    const task = document.createElement("div");
    task.className = "task";

    const taskEffect = document.createElement("div");
    taskEffect.className = "task__effect";
    taskEffect.id = taskId;

    const title = document.createElement("p");
    title.className = "task__title";
    title.textContent = taskText;

    const action = document.createElement("div");
    action.className = "task__action";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskStatus;
    checkbox.id = "taskStatus";
    checkbox.className = "task__status";
    checkbox.id = taskId;

    const delIcon = document.createElement("span");
    delIcon.className = "task__del fa-solid fa-xmark";
    delIcon.id = taskId;

    const timeIcon = document.createElement("span")
    timeIcon.id = "taskTime";
    timeIcon.className = "task__time fa-solid fa-play";
    timeIcon.id = taskId;
    action.appendChild(timeIcon);
    action.appendChild(checkbox);
    action.appendChild(delIcon);
    task.appendChild(taskEffect);
    task.appendChild(title);
    task.appendChild(action);
    location.appendChild(task);

}
export function updateTaskView(taskList, location) {
    location.innerHTML = "";
    if (taskList.length === 0) {
        const taskNull = document.createElement("div");
        taskNull.className = "task-null";
        taskNull.innerText = "No task for you...!";
        location.appendChild(taskNull);
    } else {
        taskList.forEach(task => {
            createTaskElement(task.taskName, task.taskStatus, task.id, location);
        });
    }

}
export function clearData(target){
    target.value = "";
}