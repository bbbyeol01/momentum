const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

function paintToDo(newTodo){
    const lili = document.createElement("li");
    const spanspan = document.createElement("span");
    lili.appendChild(spanspan);
    spanspan.innerText = newTodo;
    toDoList.appendChild(lili);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)
