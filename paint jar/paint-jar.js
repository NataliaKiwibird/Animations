const paint = document.querySelector('.paint');


function changeColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    paint.style.borderTop = `60px solid rgb(${r},${g},${b})`
};

setInterval(function() {
    setTimeout(changeColor, 2000);
}, 4000)