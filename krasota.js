let title_ =document.querySelector('.register')
let click = 0
let h1 = document.querySelector('.register h1')
let m = document.querySelector('.m')
let drop = document.querySelector('.drop')
m.addEventListener('mouseenter', () => {
    drop.style.display='flex'
})
drop.addEventListener('mouseleave', () => {
    drop.style.display='none'
})
document.addEventListener('DOMContentLoaded', function(){
    let burger = document.getElementById('burger')
    let menu = document.getElementById('menu')
    burger.addEventListener('click', function() {
        burger.classList.toggle('open')
        menu.classList.toggle('menu')
        click++
        if(click % 2 ==0){
            h1.style.display='block'
        }
        else{
            h1.style.display='none'
        }
           
    })
})

let offset = 0;
const sliderline = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    if(offset > 1792){
        offset = 0
    }
    sliderline.style.left = -offset + 'px';
    
});
document.querySelector('.slider-back').addEventListener('click', function(){
    offset = offset - 256;
    if(offset < 0){
        offset = 1792
    }
    sliderline.style.left = -offset + 'px';
    
});
