let navIco =document.getElementById('navToggleLogo');
let navItem=document.getElementById('navItem');
navIco.addEventListener('click',()=>{
    console.log("hello");
    navItem.classList.toggle("hide");
})