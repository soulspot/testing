let url = "admin.json";
let btn=document.querySelector("#btnClick");
let heading=document.getElementById("Heading");
var data;
btn.addEventListener('click',()=>{
    heading.innerText="Please Wait...."

    let userid=document.getElementById("userid").value;
    let password=document.getElementById("password").value;
    // console.log(userid);
    if (validation(userid,password,data)) {
        heading.innerText="Redirecting..";
        localStorage.setItem("iMovieLogin",true);
        window.location="insert.html";
    }
    else{
        heading.innerText="Invalid userid and password";
        localStorage.setItem("iMovieLogin",false);
    }
})
//Fetch admin information
fetchAdminInformation = async () => {
    let responce = await fetch(url);
    data = await responce.json();
    data=this.data;

    
};
validation=(userid,password,data)=>{
    if((userid==data.userid)&&(password==data.password)){
        return true;
    }
    else{
        return false;
    }
}

fetchAdminInformation();
