const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minites = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours} : ${minites}`;
}

getClock();
setInterval(getClock, 60000);    //  1초마다 호출
