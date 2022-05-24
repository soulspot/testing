console.log('hello');
let join=document.querySelector("#joinBtn");
let close=document.querySelector("#closeBtn");
if(localStorage.getItem("joinChat")!="true"){
    setTimeout(() => {
        const myModal = new bootstrap.Modal(document.getElementById('myModal'), focus)
        const modalToggle = document.getElementById('toggleMyModal');
        myModal.show(modalToggle);
        join.addEventListener("click",()=>{
            localStorage.setItem("joinChat",true);
            myModal.hide(modalToggle);
            window.location.href="https://t.me/iMoviesOfficial";
        })
        close.addEventListener("click",()=>{
            localStorage.setItem("joinChat",false);
            myModal.hide(modalToggle);

        })

    },10000);


}