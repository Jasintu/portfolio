let menu = document.getElementById('menu');
let menu_ul = document.querySelector("#menu_ul");
let n = 0;

menu.addEventListener("click", function(){
    if( n == 0 ){
        menu.classList.remove('menu');
        menu.classList.add('menu-toggle');
        menu_ul.classList.remove('menu_ul');
        menu_ul.classList.add('menu_ul_open');
        n = 1
    }else if( n == 1 ){ 
        menu.classList.remove('menu-toggle');
        menu.classList.add('menu');
        menu_ul.classList.remove('menu_ul_open');
        menu_ul.classList.add('menu_ul');
        n = 0;
    };
});