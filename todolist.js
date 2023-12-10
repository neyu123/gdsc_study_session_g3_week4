
function addTask(taskText) {
    const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(removeButton);

    taskList.appendChild(li);
}

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; 
    }
});
