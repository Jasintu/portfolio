let button_menu = document.querySelector(".button_menu")
let menu = document.querySelector(".menu")
let svg_btn = document.querySelector("#svg_btn")

let n = 1

button_menu.addEventListener("click", function(){
    if(n === 1){
        menu.style.display = "block"
        svg_btn.style.stroke = "black"
        n = 0
    }else if(n === 0){
        svg_btn.style.stroke = "white"
        menu.style.animation = "menu_rev 0.2s ease"
        setTimeout(function() {
            menu.style.display = "none"
            menu.style.animation = ""
          }, 180);
        n = 1
    }
    console.log(scrollY)
})
