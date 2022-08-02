let arr = [
  {
    id: 111,
    task: "buy milk",
  },
  {
    id: 222,
    task: "buy egg",
  },
  {
    id: 333,
    task: "watch any js video",
  },
  {
    id: 444,
    task: "learn about js",
  },
];
document.getElementById("batonas").addEventListener("click", () => {
  const inputValue = document.getElementById("taskInput").value;
  const form = document.getElementById("taskInput");
  //tikrinam ar tuscias input stringas
  if (!inputValue.trim()) {
    alert("NO TASK ENTERED");
    //trina para6yta forma//
    form.value = "";
    return;
  }
  const newTask = { id: new Date().getTime(), task: inputValue };
  form.value = "";

  arr.unshift(newTask);
  drawTaskList();
});

function deleteItem() {
  console.log(this.id);
  arr = arr.filter((val) => val.id !== +this.id);

  drawTaskList();
}

const drawTaskList = () => {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = null;
  arr.forEach((value, ind) => {
    //creating elements//
    const myLI = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");
    const deleteBtn = document.createElement("button");
    //adding styles//
    myLI.className = "container list-group-item ";
    myInput.className = "form-check-input me-1 col-2";
    myLabel.className = "form-check-label col-8";
    deleteBtn.className = "btn btn-warning btn-sm col-2";

    //adding other attributes
    //input
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", ind);
    //label
    myLabel.setAttribute("for", ind);
    myLabel.textContent = value.task;
    //delete btn
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("id", value.id);
    deleteBtn.textContent = "delete";
    deleteBtn.onclick = deleteItem;
    //apend childs
    myLI.append(myInput, myLabel, deleteBtn);
    tasksList.append(myLI);
  });
};

drawTaskList();
