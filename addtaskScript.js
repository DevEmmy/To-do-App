const taskBox = document.querySelector(".event-box");
// let todoArray = JSON.parse(localStorage.getItem('taskInfo'));
 
// To check if the local storage has any value or not, if you did it the way it is aove and the local storage is empty it'll send null as value
var todoArray = []
if ( JSON.parse(localStorage.getItem('taskInfo')) 
){
  todoArray = JSON.parse(localStorage.getItem('taskInfo')); // if not empty set it
}
else{
  todoArray=[] // if empty set it to be an empty array
}

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
  }
  
  
  );

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

assign();

var sav = document.querySelector('.save_btn');
sav.addEventListener("click", ()=> displayTask())


