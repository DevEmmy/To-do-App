const addtask = () => {
  const addTaskButton = document.querySelector("#add-task-btn");
  
  addTaskButton.addEventListener("click", () => {
    location.href= "/addtask.html";
  });
}

addtask();

const test_appendChild = () => {
  const new_buddy = document.createElement('div')

  // new_link.textContent = getName()
  new_buddy.appendChild(new_link) 

  const list = document.querySelector('#buddies')
  list.appendChild(new_buddy)
  
}
