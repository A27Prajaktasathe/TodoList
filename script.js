document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector(".delete-button").addEventListener("click", function () {
                const taskTextElement = li.querySelector("span");
                taskTextElement.classList.add("deleted");
            });
        }
    });
});
