const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const lili = event.target.parentElement;
    lili.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(lili.id));
    saveToDos();
    
    // localStorage.removeItem();
}

function paintToDo(newTodo){
    const lili = document.createElement("li");
    lili.id = newTodo.id;
    const spanspan = document.createElement("span");
    spanspan.innerText = newTodo.text;
    const buttonbutton = document.createElement("button");
    buttonbutton.innerText = "x";
    buttonbutton.addEventListener("click", deleteToDo);
    lili.appendChild(spanspan);
    lili.appendChild(buttonbutton);
    toDoList.appendChild(lili);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// (item) => console.log("blahblah", item);
// ===
// function blahblahblah(item) {
//     console.log("blahblahblah". item);
// }

// item = a or b or c or d ...
// item에 있는 건 array에 들어간 값 중 하나

function sexyFilter() {

}