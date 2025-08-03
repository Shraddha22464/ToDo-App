function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // <li> element banaya
  let li = document.createElement("li");

  // ✅ Task pe click karne se 'completed' class toggle karega
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // ❌ delete button add kiya
  li.innerHTML = taskText + ' <span onclick="removeTask(this)">❌</span>';

  // list me <li> add kiya
  document.getElementById("taskList").appendChild(li);

  // input box khali kar diya
  input.value = "";
}

// ❌ Task delete karne ka function
function removeTask(element) {
  element.parentElement.remove();
}
