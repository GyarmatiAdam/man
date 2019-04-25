//man rises his hat and say hi//////////////////////////////////////////////
const hat_top = document.querySelector('.hat_top');
const hat_bottom = document.querySelector('.hat_bottom');
const hat = document.querySelector('.hat');
const bub = document.querySelectorAll('.bub');
const bubble1 = document.querySelector('.bubble1');
const right_arm = document.querySelector('.right_arm');


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

//text-bubble vsible for 3 sec
function appear(){
    for(i = 0; i < bub.length; i++){
        bub[i].style.visibility = 'visible';
        bub[i].animate([{opacity:'0.1'}, {opacity:'0.5'},{opacity: '1'},{opacity: '0.5'},{opacity: '0'}],
        {duration:3000, fill:'forwards'});
    }
}

//man rises hat
hat.addEventListener('mouseover', function(){

    hat_top.classList.add('rise')
    hat_bottom.classList.add('rise2')
    right_arm.classList.add('rise3')

    bubble1.innerHTML = 'Hi, How are you today?';

    part_over.call();
})

//man put back the hat
hat.addEventListener('mouseout', function(){

    hat_top.classList.remove('rise')
    hat_bottom.classList.remove('rise2')
    right_arm.classList.remove('rise3')

    part_out.call();
})

//man waveing with left hand//////////////////////////////////////////////////
const left_arm = document.querySelector('.left_arm');

    fg = left_arm.onclick = function waveing(){

//waving with left arm
        left_arm.style.animation = 'wave 0.1s 10';
        left_arm.style.animationDirection = "alternate";
        
//bubble appears onclick for 3 secons
        appear.call();

        bubble1.innerHTML = 'Hello!!!';   
    }

//man make a deep bow////////////////////////////////////////////////////////////////

const upper = document.querySelector('.upper');
const body = document.querySelector('.body');
const mouth = document.querySelector('.mouth');



body.addEventListener('mouseover', function(){

    upper.classList.add('bow')
    mouth.classList.add('sad')

    part_over.call()
    bubble1.innerHTML = 'I beg your pardon...';

})

body.addEventListener('mouseout', function(){

    upper.classList.remove('bow')
    mouth.classList.remove('sad')


    part_out.call();
})


