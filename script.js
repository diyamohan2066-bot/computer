function addTask() {
    let task = document.getElementById("task").value;

    if (task == "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("task").value = "";
}
