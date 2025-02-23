const listContainer = document.getElementById("listContainer");
const deleteBtn = document.querySelectorAll(".deleteBtn");
const addBtn = document.querySelector("#addTaskBtn");
const input = document.querySelector("#taskInput");

// crates a new task.
function createElement() {
  let task = input.value;
  const newTask = document.createElement("li");
  newTask.classList.add("task");
  newTask.innerHTML = `
      <p>${task}</p>
      <button class="deleteBtn">Delete</button>
      `;
  return newTask;
}
// add the new task to the container.
function addTask() {
  const newElement = createElement();
  listContainer.appendChild(newElement);
  input.value = "";
}

// removes the selected task
function deleteTask(e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentNode.remove();
  }
}

addBtn.addEventListener("click", addTask);
listContainer.addEventListener("click", deleteTask);
