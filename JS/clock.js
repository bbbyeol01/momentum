const clock = document.querySelector("h2#clock-HnM");
const sec = document.querySelector("h2#clock-S");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minites = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minites}`;

}

function getSeconds() {
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2, "0");
    sec.innerText = ` : ${seconds}`;
}

getClock();
setInterval(getClock, 60000);
getSeconds();
setInterval(getSeconds, 1000);  //  1초마다 호출
