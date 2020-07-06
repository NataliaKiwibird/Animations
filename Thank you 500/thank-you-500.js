const counter = document.querySelector('.counter');
const thx = document.querySelector('.thx');


let output = 0;

const delay = 
    setTimeout(() => {
        const counting = setInterval(() => {
            counter.textContent = `${output}`;
            if(output === 500){
                counter.textContent = `+ ${output}`
                thx.style.opacity = "1";
            } else {
                output++;
            }
        }, 10);
    }, 2000);


