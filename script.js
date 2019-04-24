//man rises his hat and say hi//////////////////////////////////////////////
const hat_top = document.querySelector('.hat_top');
const hat_bottom = document.querySelector('.hat_bottom');
const hat = document.querySelector('.hat');
const bub = document.querySelectorAll('.bub');
const bubble1 = document.querySelector('.bubble1');

//make text-bubble visible--callable function
function part_over(){
    for(i = 0; i < bub.length; i++){
        bub[i].style.visibility = 'visible';
        bub[i].animate([{opacity:'0.1'}, {opacity:'0.5'},{opacity: '1'}],
        {duration:800, fill:'forwards'});
    }
}

//make the text-bubble invisible--callable function
function part_out(){
    for(i = 0; i < bub.length; i++){
        bub[i].style.visibility = '';
    }
}

//man rises hat
hat.addEventListener('mouseover', function(){

    hat_top.classList.add('rise')
    hat_bottom.classList.add('rise2')

    bubble1.innerHTML = 'Hi, How are you today?';

    part_over.call();
})

//man put back the hat
hat.addEventListener('mouseout', function(){

    hat_top.classList.remove('rise')
    hat_bottom.classList.remove('rise2')

    part_out.call();
})
//////////////////////////////////////////////////

const left_arm = document.querySelector('.left_arm');

left_arm.addEventListener('click', function(){

    left_arm.style.animation = 'wave 0.5s infinite';
    left_arm.style.animationDirection = "alternate";
  
})
