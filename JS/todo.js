const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

function deleteToDo(event) {
    const lili = event.target.parentElement;
    lili.remove();
}

function paintToDo(newTodo){
    const lili = document.createElement("li");
    const spanspan = document.createElement("span");
    spanspan.innerText = newTodo;
    const buttonbutton = document.createElement("button");
    buttonbutton.innerText = "❌";
    buttonbutton.addEventListener("click", deleteToDo);
    lili.appendChild(spanspan);
    lili.appendChild(buttonbutton);
    toDoList.appendChild(lili);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)
