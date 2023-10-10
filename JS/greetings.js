const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

loginForm.addEventListener("submit", onLoginSubmit);


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);

    paintGreetings();
}

function paintGreetings() {
    const date = new Date();
    const hours = date.getHours();
    const username = localStorage.getItem(USERNAME_KEY);
    if(hours > 19 && hours < 22){
        greeting.innerText = `Good evening, ${username}.`;
    } else if(hours > 22){
        greeting.innerText = `Good night, ${username}.`;
    } else if(hours < 10 && hours > 5){
        greeting.innerText = `Good morning, ${username}.`;
    } else if(hours > 12 && hours < 18){
        greeting.innerText = `Good afternoon, ${username}.`;
    } else {
        greeting.innerText = `Nice to meet you, ${username}.`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}