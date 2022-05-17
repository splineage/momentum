const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event){
    // which button clicked?
    console.dir(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    // console.log(`paint ${newTodo}`);
    const li = document.createElement('li');
    const insideSpan = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo)
    li.appendChild(insideSpan);
    li.appendChild(button);
    toDoList.appendChild(li);
    insideSpan.innerText = newTodo;
    console.log(insideSpan);
}
function handleTodoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value; // copy
    toDoInput.value = "";
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit", handleTodoSubmit);
