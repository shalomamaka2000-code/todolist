const taskInput = document.getElementById("taskinput");
const addButton = document.getElementById("addtask");
const taskList = document.getElementById("tasklist");
addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn")

        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("done-btn");

        doneButton.addEventListener("click", function () {
            listItem.style.textDecoration = "line-through" ;
            listItem.style.color = "gray";
        });

        listItem.appendChild(doneButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
});