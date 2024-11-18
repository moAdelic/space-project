let menubar = document.querySelector(".menu-bar")
let navul = document.querySelector(".nav ul")
menubar.addEventListener("click",()=>{
    menubar.classList.toggle("close")
    navul.classList.toggle("mobile-show")
    
    
    
})
let links = document.querySelectorAll(".links li a")
links.forEach((link)=>{
    link.addEventListener("click",()=>{
        links.forEach((item)=> item.classList.remove("active"))
        link.classList.add("active")
    })
})
