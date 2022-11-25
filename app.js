

function hamburger(){
    let menu = document.querySelector(".menu") ;
    let x  = true
    let time
    menu.addEventListener("click",function(){
    document.body.classList.toggle("overflow")
    menu.classList.toggle("menuClick")
    if(x == true){
        time =  setTimeout(() => {
            document.querySelector(".menuUl").style.display = "block"
            }, 500); 
             x = false
    }else{
        document.querySelector(".menuUl").style.display = "none"
        x = true
        clearTimeout(time)
    }
})
}

document.addEventListener('mousemove', function(){
    if(window.innerWidth>900){
        document.querySelector(".menuUl").style.display = "none"
    }
});
hamburger()
