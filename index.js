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
//function to draw a new task
const addTask = () => {
  const inputValue = document.getElementById("taskInput").value;
  const input = document.getElementById("taskInput");
  //  let input = obj1
  if (!inputValue.trim()) {
    alert(" nothink to do");
    input.value = null;
    return;
  }

  const newTask = {
    id: new Date().getTime(),
    task: inputValue,
  };

  arr.unshift(newTask);
  input.value = null;
  drawTaskList();
};

document.getElementById("batonas").addEventListener("click", addTask);

//draw new task on Enter
document.getElementById("taskInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// function deleteItem() {
//   console.log(this.id);
//   arr = arr.filter((val) => val.id !== +this.id);

//   drawTaskList();
// }

const drawTaskList = () => {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = null;
  arr.forEach((singleTask, ind) => {
    //creating elements//
    const myLI = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");
    const btnGroup = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    //adding styles//
    myLI.className = "container list-group-item ";
    btnGroup.className = "btn-group col-4";
    myInput.className = "form-check-input me-1 col-1";
    myLabel.className = "form-check-label col-7";
    deleteBtn.className = "btn btn-warning btn-sm ";
    editBtn.className = "btn btn-info btn-sm";
    //adding other attributes

    //input
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", ind);
    //label
    myLabel.setAttribute("for", ind);
    myLabel.textContent = singleTask.task;
    // set atribute
    btnGroup.setAttribute("role", "group");
    //delete btn
    deleteBtn.setAttribute("type", "button");
    deleteBtn.textContent = "Delete";
    // edit button
    editBtn.setAttribute("type", "button");
    editBtn.textContent = "Edit";
    // append buttons
    btnGroup.append(editBtn, deleteBtn);
    //apend childs
    myLI.append(myInput, myLabel, btnGroup);
    tasksList.append(myLI);
    //

    deleteBtn.addEventListener("click", () => {
      arr = arr.filter((filterTask) => filterTask.id !== singleTask.id);
      drawTaskList();
    });

    editBtn.addEventListener("click", () => {
      console.log(singleTask);
      const updatedTask = prompt("Update your task", singleTask.task);
      if (updatedTask?.trim()) {
        const newTask = {
          ...singleTask,
          task: updatedTask,
        };

        arr.splice(ind, 1, newTask);
        drawTaskList();
      }
    });
  });
};

drawTaskList();
