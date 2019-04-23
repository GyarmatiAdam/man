const hat_top = document.querySelector('#hat_top');
const hat_bottom = document.querySelector('#hat_bottom');

//hat_top.addEventListener('mouseover', rise);

function rise(){
        hat_top.style.margin = '-60px 0px';
        hat_top.style.transform = 'rotate(30deg)';

        hat_bottom.style.margin = '-40px -15px';
        hat_bottom.style.transform = 'rotate(-60deg)';
}


setInterval(rise, 1000)