const counter = document.querySelector('.counter');
const thx = document.querySelector('.thx');
const span = document.querySelector('span');


let output = 0;
const counting = setInterval(() => {
    counter.textContent = `${output}`;
    if(output === 500){
        counter.textContent = `+ ${output}`
        thx.style.opacity = "1";
    } else {
        setTimeout(counting, 2000);
        output++;
    }
}, 10);


