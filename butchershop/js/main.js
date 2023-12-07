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


function shopp() {
   
     const link2Btn = document.querySelector ('.link-2');
     const link1Btn = document.querySelector ('.link-1');
     let menuOpen = false;

     if(!menuOpen) {
         link2Btn.classList.add('open');
         link1Btn.classList.add('change');
         menuOpen = true;
     }
}

function shoppBack() {
   
    const link2Btn = document.querySelector ('.link-2');
    const link1Btn = document.querySelector ('.link-1');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('open');
        link1Btn.classList.remove('change');
        menuOpen = true;
    }
}
// 
function CuratedBox (){
    const link2Btn = document.querySelector ('.link-2');
    const CuratedBtn = document.querySelector ('.link-CuratedBox');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('open');
        link2Btn.classList.add('change');
        CuratedBtn.classList.add('open');
        menuOpen = true;
    }
}
function CuratedBoxBack (){
    const link2Btn = document.querySelector ('.link-2');
    const CuratedBtn = document.querySelector ('.link-CuratedBox');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('change');
        link2Btn.classList.add('open');
        CuratedBtn.classList.remove('open');
        menuOpen = true;
    }
}
// 
function TypeofMeat(){
    const link2Btn = document.querySelector ('.link-2');
    const TypeOfMeatBtn = document.querySelector ('.link-TypeOfMeat');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('open');
        link2Btn.classList.add('change');
        TypeOfMeatBtn.classList.add('open');
        menuOpen = true;
    }
}
function TypeofMeatBack(){
    const link2Btn = document.querySelector ('.link-2');
    const TypeOfMeatBtn = document.querySelector ('.link-TypeOfMeat');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('change');
        link2Btn.classList.add('open');
        TypeOfMeatBtn.classList.remove('open');
        menuOpen = true;
    }
}
// 
function Grades_Collection (){
    const link2Btn = document.querySelector ('.link-2');
    const CuratedBtn = document.querySelector ('.link-Grades-Colection');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('open');
        link2Btn.classList.add('change');
        CuratedBtn.classList.add('open');
        menuOpen = true;
    }
}
function Grades_CollectionBack (){
    const link2Btn = document.querySelector ('.link-2');
    const TypeOfMeatBtn = document.querySelector ('.link-Grades-Colection');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('change');
        link2Btn.classList.add('open');
        TypeOfMeatBtn.classList.remove('open');
        menuOpen = true;
    }
}
// 
function PopularCuts (){
    const link2Btn = document.querySelector ('.link-2');
    const CuratedBtn = document.querySelector ('.link-PopularCuts');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('open');
        link2Btn.classList.add('change');
        CuratedBtn.classList.add('open');
        menuOpen = true;
    }
}
function PopularCutsBack (){
    const link2Btn = document.querySelector ('.link-2');
    const TypeOfMeatBtn = document.querySelector ('.link-PopularCuts');
    let menuOpen = false;

    if(!menuOpen) {
        link2Btn.classList.remove('change');
        link2Btn.classList.add('open');
        TypeOfMeatBtn.classList.remove('open');
        menuOpen = true;
    }
}
