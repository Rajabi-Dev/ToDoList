import {showMessage, updateTaskView} from "./todoBom";
export function actionTask(selector, arr, location) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.addEventListener("click", e => {
            if (selector === ".task__status") {
                arr.forEach(item => {
                    if (item.id === element.id) {
                        item.taskStatus = e.target.checked;
                    }
                });
            }
            if (selector === ".task__del") {
                const index = arr.findIndex(item => item.id === element.id);
                if (index !== -1) {
                    arr.splice(index, 1);
                    element.closest(".task").remove();
                }
            }
            localStorage.setItem("tasks", JSON.stringify(arr));
            updateTaskView(arr, location);
        });
    });
}
export function createTaskTimer(selector, arr, location) {
    const plays = document.querySelectorAll(selector);
    plays.forEach(element => {
        let isRunning = false;
        let startTime = null;
        let animationRef = null;
        let timerId = null;

        element.addEventListener("click", e => {
            const taskId = e.target.id;
            const matchedItem = arr.find(item => String(item.id) === taskId);

            if (!matchedItem || matchedItem.time === 0) {
              showMessage("No set time for this task!","info")
                return;
            }

            const taskElement = element.closest(".task");
            const effect = taskElement.querySelector(".task__effect");

            if (!isRunning) {
                isRunning = true;
                startTime = Date.now();
                const totalTime = (matchedItem.remainingTime ?? matchedItem.time) * 1000;

                effect.style.animation = `growBar ${totalTime / 1000}s linear forwards`;
                effect.style.animationPlayState = "running";

                e.target.className = "task__time fa-solid fa-pause";

                animationRef = { totalTime, startTime };

                timerId = setTimeout(() => {
                    isRunning = false;
                    matchedItem.remainingTime = 0;

                    effect.style.animationPlayState = "paused";
                    e.target.className = "task__time fa-solid fa-play";
                   showMessage("task time is end","info")
                    matchedItem.taskStatus = true;
                    const checkbox = taskElement.querySelector(".task__status");
                    if (checkbox) checkbox.checked = true;
                    actionTask(".task__status", arr, location);
                }, totalTime);

            } else {
                isRunning = false;
                const elapsed = Date.now() - animationRef.startTime;
                const remaining = (animationRef.totalTime - elapsed) / 1000;

                effect.style.animationPlayState = "paused";
                clearTimeout(timerId);

                matchedItem.remainingTime = +remaining.toFixed(1);
                e.target.className = "task__time fa-solid fa-play";
            }
        });
    });
}
export function checkValidator(validType, target, arr = "null", keyName="null") {
    if (validType === "isNull") {
        if (Array.isArray(target)) {
            return target.length === 0;
        } else return target === "";
    }
    if (validType === "isExist") {
        return arr.some(item => item[keyName] === target);
    }
}