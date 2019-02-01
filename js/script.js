
let taskList = [];

if(localStorage.getItem('todo') != undefined){
   taskList = JSON.parse(localStorage.getItem('todo'))
   for(let key = 0; key < taskList.length; key++){
        let {todo,checked} = {...taskList[key]};
        let li = document.createElement('LI');
        let textNode = document.createTextNode(todo);
        li.appendChild(textNode);
        document.getElementById('taskList').appendChild(li);
        document.getElementById('myInput').value = "";
    }
}

let outTask = () => {
    let li = document.createElement('LI');
    let index = taskList.length;
    let {todo, checked} = {...taskList[index-1]};
    let textNode = document.createTextNode(todo);
    li.appendChild(textNode);
    document.getElementById('taskList').appendChild(li);
    document.getElementById('myInput').value = "";
}

let addNewTask = () => {
    let newTask = document.getElementById('myInput').value;
    let task = {};
    if(newTask === ""){
        alert ('Input task');
    }else {
        task.todo = newTask;
        task.checked = false;
        taskList.push(task);
        localStorage.setItem('todo', JSON.stringify(taskList));
        outTask();
    }
}

let list = document.querySelector('UL');
list.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
}, false);

    

