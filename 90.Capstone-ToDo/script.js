console.log("test script.js");

form = document.createElement("form");

Input = document.createElement("input");
Input.type = "text";
Input.placeholder = "Add a new task";
form.append(Input);

buttonAdd = document.createElement("button");
buttonAdd.type = "submit";
buttonAdd.textContent = "Add Task";

form.append(buttonAdd);
document.body.append(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = Input.value.trim();
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    document.body.append(taskItem);
    Input.value = "";
  } else {
    alert("Please enter a task.");
  }
});
