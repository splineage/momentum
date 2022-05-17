const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo){
    // console.log(`paint ${newTodo}`);
    const li = document.createElement('li');
    const insideSpan = document.createElement('span');
    li.appendChild(insideSpan);
    insideSpan.innerText = newTodo;
    console.log(insideSpan);
    toDoList.appendChild(li);

}
function handleTodoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value; // copy
    toDoInput.value = "";
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit", handleTodoSubmit);