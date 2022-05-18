const TODOS_KEY = "todos";
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];  //array

// saving todo
function saveToDos(){
    console.log(JSON.stringify(toDos));
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // string -> json
    console.log(JSON.parse(localStorage.getItem(TODOS_KEY))); // json -> array
}

function deleteToDo(event){
    // which button clicked?
    console.dir(event.target.parentElement);
    const li = event.target.parentElement; // 버튼이 포함된 li 제거.
    
    // update localstorage
    console.log(li.id);
    id = li.id;
    console.log(`id ${id}`)
    li.remove();
    // toDos.id (type number), li.id (type string)
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    // console.log(`paint ${newTodo}`);
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const insideSpan = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo)
    li.appendChild(insideSpan);
    li.appendChild(button);
    toDoList.appendChild(li);
    insideSpan.innerText = newTodoObj.text;
    console.log(insideSpan);
}
function handleTodoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value; // copy
    const newTodoObj = {
        text: newTodo, // string
        id: Date.now() // number
    }
    toDoInput.value = "";
    toDos.push(newTodoObj);
    saveToDos(); // localStorage
    paintToDo(newTodoObj); 
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item))
}