let arr = [
  {
    id: 123,
    task: "buy milk",
  },
  {
    id: 321,
    task: "buy egg",
  },
  {
    id: 222,
    task: "watch any js video",
  },
  {
    id: 333,
    task: "learn about js",
  },
];
document.getElementById("batonas").addEventListener("click", () => {
  const inputValue = document.getElementById("taskInput").value;
  const newTask = { id: new Date().getTime(), task: inputValue };
  const form = document.getElementById("taskInput");
  form.value = "";
  if (form.value.length == 0) {
    alert("please enter task");
    return false;
  }
  arr.unshift(newTask);
  drawTaskList();
});

const drawTaskList = () => {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = null;
  arr.forEach((value) => {
    //creating elements//
    const myLI = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");
    //adding styles//
    myLI.className = "list-group-item";
    myInput.className = "form-check-input me-1";
    myLabel.className = "form-check-label";

    //adding other attributes
    //input
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", value.id);
    //label
    myLabel.setAttribute("for", value.id);
    myLabel.textContent = value.task;
    //apend childs
    myLI.append(myInput, myLabel);
    tasksList.append(myLI);
  });
};

drawTaskList();
