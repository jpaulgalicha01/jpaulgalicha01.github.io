const menuCustom = document.querySelector ('.menu-custom');
const menu = document.querySelector ('.menu');
const dropdownCustom = document.querySelector ('.dropDownContent');
let menuOpen = false;
menuCustom.addEventListener('click', () =>{
    if(!menuOpen) {
        menuCustom.classList.add('open');
        menu.classList.add('active');
        dropdownCustom.classList.add('active'); 
        menuOpen = true;    
    }
    else {
        menu.classList.remove('active');
        menuCustom.classList.remove('open');
        menuOpen = false;
        dropdownCustom.classList.remove('active');
        
    }
});