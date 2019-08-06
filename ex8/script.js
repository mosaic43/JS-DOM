/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var button = document.getElementById("add-button");


button.addEventListener('click', function(){
    var todoItem = document.getElementById('description').value;
    var listItem = document.createElement('li');
    listItem.innerHTML = todoItem;
    document.getElementById("todo-list").appendChild(listItem);
  
})




var todoList = document.querySelector('ul');
todoList.addEventListener('click', function(ev) {
    // if (ev.target.style.textDecoration === 'line-through') {
    //     ev.target.style.textDecoration = 'none'
    //  } else {
    //     ev.target.style.textDecoration = 'line-through'
    //  }
    if (ev.target.tagName === 'LI') {
       ev.target.classList.toggle('checked');
    }

}, false);









