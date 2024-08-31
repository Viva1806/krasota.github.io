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