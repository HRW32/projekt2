const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = new Image();
image.src = "./res/img/dvd.png";
let x = 0;
let y = 0;
let xVelocity = 0.5;
let yVelocity = 0.5;
let imageWidth = 200;
let imageHeight = 200;

window.addEventListener ("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


window.onload = () => {
    resizeCanvas();
    setInterval (() => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        x += xVelocity;
        y += yVelocity;
        if (y + imageHeight >= canvas.height || y <= 0){
            yVelocity *= -1;
        }
        if (x + imageWidth >= canvas.width || x <= 0){
            xVelocity *= -1;
        }    
        ctx.filter = `hue-rotate(${getRandomNumber(0, 360)})`;
        ctx.drawImage(image, x, y, imageWidth, imageHeight);
    }, 1);
}
