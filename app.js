

function hamburger(){
    let menu = document.querySelector(".menu") ;
    let hamb = document.querySelector(".hamburger")
    let x  = true
    let time
    menu.addEventListener("click",function(){
    document.body.classList.toggle("overflow")
    menu.classList.toggle("menuClick")
    
    hamb.classList.toggle("touch")
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
