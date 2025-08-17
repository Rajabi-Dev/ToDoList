import state from "./variable";
import {actionTask, checkValidator, createTaskTimer} from "./todoData";
import {showMessage, updateTaskView, clearData} from "./todoBom";

const addTaskForm = state["addTaskForm"],
    taskList = state["taskList"],
    addTaskName = state["addTaskName"],
    addTaskTime = state["addTaskTime"],
    viewTask = state["viewTask"],
    taskDel = state["taskDel"],
    taskStatus = state["taskStatus"],
    taskTime = state["taskTime"];
function Invoke(){
    updateTaskView(taskList,viewTask);
    actionTask(taskStatus, taskList, viewTask);
    actionTask(taskDel, taskList, viewTask);
    createTaskTimer(taskTime, taskList,viewTask);
}
export function flowEval() {
    addTaskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let checkNullTaskName = checkValidator("isNull", addTaskName.value);
        let checkExistTask = checkValidator("isExist", addTaskName.value,taskList,"taskName");
        if (checkNullTaskName) {
            showMessage("Please enter taskname")
        } else {
            if (checkExistTask) {
                showMessage("this task is exist")
            } else {
                let newTask = {
                    taskName: addTaskName.value,
                    taskStatus: false,
                    id: addTaskName.value,
                    time: addTaskTime.value === "" ? 0 : Number(addTaskTime.value),
                };
                taskList.push(newTask);
                localStorage.setItem("tasks", JSON.stringify(taskList));
               Invoke();
                clearData(addTaskName);
                clearData(addTaskTime);

            }
        }
    });
   Invoke();
}




