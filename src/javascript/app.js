"use strict";
const daysContainer = document.querySelector(".daysContainer");
const daysPreview = document.querySelector(".daysPreview");
const calendarContainer = document.querySelector(".calendar");
const newTask = document.querySelector(".newTask");
const createTaskBtn = document.querySelector(".createTaskBtn");
const fader = document.querySelector(".fader");
const taskCreatorContainer = document.querySelector(".taskCreatorContainer");
const taskNameInput = document.querySelector(".taskNameInput");
const categoryInput = document.querySelector(".categoryInput");
const initialHourInput = document.querySelector(".initialHourInput");
const initialMinuteInput = document.querySelector(".initialMinuteInput");
const endHourInput = document.querySelector(".endHourInput");
const endMinuteInput = document.querySelector(".endMinuteInput");
let array = [1, 2, 3, 4, 5];
let counter = 0;
let closedWindow = true;
let isDragging = false;
let initialMouseY;
let initialScrollTop;
let firstLoad = true;
window.onload = () => {
    setupDays();
    window.location.replace("http://127.0.0.1:5500/src/app.html#app");
};
newTask.onclick = () => {
    createTaskController("setup");
    animationController("newTask");
};
createTaskBtn.onclick = () => {
    createTaskController("create");
    animationController("newTask");
};
taskCreatorContainer.onclick = (event) => {
    if (event.target === taskCreatorContainer) {
        animationController("newTask");
    }
};
taskNameInput.oninput = () => {
    createTaskController("check");
};
categoryInput.oninput = () => {
    createTaskController("check");
};
initialHourInput.oninput = () => {
    createTaskController("check");
};
initialMinuteInput.oninput = () => {
    createTaskController("check");
};
endHourInput.oninput = () => {
    createTaskController("check");
};
endMinuteInput.oninput = () => {
    createTaskController("check");
};
function setupDays() {
    const previousDiv = document.createElement("div");
    previousDiv.innerHTML = "DIA 1";
    previousDiv.classList.add("previousTaskContainer");
    daysContainer.appendChild(previousDiv);
    const currentDiv = document.createElement("div");
    currentDiv.innerHTML = "DIA 2";
    currentDiv.classList.add("currentTaskContainer");
    currentDiv.setAttribute("id", "app");
    daysContainer.appendChild(currentDiv);
    const nextDiv = document.createElement("div");
    nextDiv.innerHTML = "DIA 3";
    nextDiv.classList.add("nextTaskContainer");
    daysContainer.appendChild(nextDiv);
}
// Function to handle the mousemove event while dragging
function handleMouseMove(event) {
    if (!isDragging)
        return;
    const deltaY = event.clientY - initialMouseY;
    daysContainer.scrollTop = initialScrollTop - deltaY;
}
// Function to handle the mousedown event and initiate the dragging
function handleMouseDown(event) {
    isDragging = true;
    initialMouseY = event.clientY;
    initialScrollTop = daysContainer.scrollTop;
    document.addEventListener("mousemove", handleMouseMove);
}
// Function to handle the mouseup event and stop the dragging
function handleMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
}
// Función para calcular el porcentaje de scroll respecto al contenido
function calculateScrollPercentage(container) {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
// Función para cambiar las clases de los contenedores según el porcentaje de scroll
function updateContainersByScroll() {
    let previousContainer = document.querySelector(".previousTaskContainer");
    let currentContainer = document.querySelector(".currentTaskContainer");
    let nextContainer = document.querySelector(".nextTaskContainer");
    const scrollPercentage = calculateScrollPercentage(daysContainer);
    const thresholdPercentage = 25;
    console.log(scrollPercentage);
    if (scrollPercentage <= thresholdPercentage) {
        nextContainer.remove();
        console.log("previous creado");
        currentContainer.className = "nextTaskContainer";
        currentContainer.classList.remove("currentTaskContainer");
        previousContainer.className = "currentTaskContainer";
        previousContainer.classList.remove("previousTaskContainer");
        const previousDiv = document.createElement("div");
        previousDiv.innerHTML = "DIA 1_" + counter;
        previousDiv.classList.add("previousTaskContainer");
        daysContainer.insertBefore(previousDiv, previousContainer);
    }
    else if (scrollPercentage >= 100 - thresholdPercentage) {
        previousContainer.remove();
        console.log("next creado");
        nextContainer.className = "currentTaskContainer";
        nextContainer.classList.remove("nextTaskContainer");
        currentContainer.className = "previousTaskContainer";
        currentContainer.classList.remove("currentTaskContainer");
        const nextDiv = document.createElement("div");
        nextDiv.classList.add("nextTaskContainer");
        nextDiv.innerHTML = "DIA 3_" + counter;
        daysContainer.appendChild(nextDiv);
    }
    counter++;
}
function animationController(action) {
    switch (action) {
        case "newTask":
            if (closedWindow) {
                fader.style.animation = "";
                fader.style.zIndex = "4";
                fader.style.opacity = "0.25";
                fader.style.visibility = "visible";
                taskCreatorContainer.style.visibility = "visible";
                closedWindow = false;
            }
            else {
                fader.style.zIndex = "2";
                fader.style.visibility = "hidden";
                taskCreatorContainer.style.visibility = "hidden";
                closedWindow = true;
            }
            break;
    }
}
function createTaskController(state) {
    switch (state) {
        case "check":
            if (taskNameInput.value !== "" &&
                categoryInput.value !== "" &&
                initialHourInput.value !== "" &&
                initialMinuteInput.value !== "" &&
                endHourInput.value !== "" &&
                endMinuteInput.value !== "") {
                createTaskBtn.classList.remove("disabled");
            }
            else if (taskNameInput.value === "" ||
                categoryInput.value === "" ||
                initialHourInput.value === "" ||
                initialMinuteInput.value === "" ||
                endHourInput.value === "" ||
                endMinuteInput.value === "") {
                createTaskBtn.classList.add("disabled");
            }
            break;
        case "setup":
            createTaskBtn.classList.add("disabled");
            taskNameInput.value = "";
            categoryInput.value = "";
            initialHourInput.value = "";
            initialMinuteInput.value = "";
            endHourInput.value = "";
            endMinuteInput.value = "";
            break;
        case "create":
            break;
    }
}
//  Attach event listener to the daysContainer element MOUSE DOWN
daysContainer.addEventListener("mousedown", handleMouseDown);
//  Attach event listener to the document MOUSE UP
document.addEventListener("mouseup", handleMouseUp);
//  Attach event listener to the daysContainer element SCROLL
daysContainer.addEventListener("scroll", updateContainersByScroll);
