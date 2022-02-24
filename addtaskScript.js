const taskBox = document.querySelector(".event-box");
let todoArray = JSON.parse(localStorage.getItem('taskInfo'));
 

const assign = () => {
  console.log("assigning");
  var save = document.querySelector(".save_btn");
 
  var taskTitle = document.querySelector(".addtask");
    var taskDetails = document.querySelector(".addtaskdetails");
    var taskDay = document.querySelector(".taskDay");
    var backgroundColor = document.querySelector(".addColor");

  save.addEventListener("click", () => {
    
    var tasks =
    {
      tasktitle: taskTitle.value,
      taskdetails: taskDetails.value,
      taskday: taskDay.value,
      backgroundcolor: backgroundColor.value
    }
    console.log("task", tasks);

    todoArray.push(tasks);
    localStorage.setItem("taskInfo", JSON.stringify(todoArray));
    location.href = "/index.html";
  });

}

const getName = () => {
  return document.querySelector('todoArray');
}

const displayTask = () => {
  const new_buddy = `<div class="event-box"><div>${getName()}</div></div>`
  console.log("buddy", getName());
  const list = document.querySelector('.event-box')
  
  list.append += new_buddy
}

document.querySelector('.save_btn').addEventListener('click', displayTask)


assign();

