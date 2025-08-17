
const state = {
    taskList : JSON.parse(localStorage.getItem("tasks")) || [],
    body:document.body,
    themeSwitch:document.querySelector("#themeSwitch"),
    addTaskForm:document.querySelector("#addTaskForm"),
    addTaskName:document.querySelector("#addTaskName"),
    addTaskTime:document.querySelector("#addTaskTime"),
    viewTask:document.querySelector("#viewTask"),
    loader:document.querySelector("#loader"),
    app:document.querySelector("#app"),
    taskStatus:".task__status",
    taskTime:".task__time",
    taskDel:".task__del",
};
export default state;
