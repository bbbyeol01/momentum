const images = [
    "1.sea.jpg",
    "2.thunderstorm.jpg",
    "3.forest.jpg",
    "4.beach.jpg"
]


const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";

document.body.appendChild(bgImage);
