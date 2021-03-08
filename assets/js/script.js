var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!")
        return false;
    }

    formEl.reset();
 
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    // creates list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // creates div to hold task info and add list item
    var taskInfoEl = document.createElement("div");

    // give it a class name and adds HTML content to div
    taskInfoEl.className = "task-item";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
