//man rises his hat and say hi
const hat_top = document.querySelector('.hat_top');
const hat_bottom = document.querySelector('.hat_bottom');
const hat = document.querySelector('.hat');
const bub = document.querySelectorAll('.bub');
const bubble1 = document.querySelector('.bubble1');

hat.addEventListener('mouseover', function(){

    hat_top.classList.add('rise')//rises hat
    hat_bottom.classList.add('rise2')

    bubble1.innerHTML = 'Hi, How are you today?';

    for(i = 0; i < bub.length; i++){
        bub[i].style.visibility = 'visible';//make text-bubble visible
    }
})

hat.addEventListener('mouseout', function(){

    hat_top.classList.remove('rise')//put hat back
    hat_bottom.classList.remove('rise2')

    for(i = 0; i < bub.length; i++){
        bub[i].style.visibility = '';
    }
})




//////////////////////////////////////////////////

