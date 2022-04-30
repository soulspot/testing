const btn=document.querySelector('.up-btn');
const header=document.querySelector('.header');
btn.addEventListener('click',()=>{
    header.classList.toggle('active');
})