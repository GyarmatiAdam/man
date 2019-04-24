const hat_top = document.querySelector('.hat_top');
const hat_bottom = document.querySelector('.hat_bottom');
const hat = document.querySelector('.hat');


hat.addEventListener('mouseover', function(){
    hat_top.classList.add('rise')
    hat_bottom.classList.add('rise2')

})
hat.addEventListener('mouseout', function(){
    hat_top.classList.remove('rise')
    hat_bottom.classList.remove('rise2')
})
