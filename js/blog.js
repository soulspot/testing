let blogs=document.getElementById("blogs");
console.log('ok this is blog.js')
let url="js/blog.json";
let response;
let data;
let str="";
fetch_data= async (url)=>{
    response=await fetch(url);
    data=await response.json();
    data.forEach((element)=>{
        str+=`<div class="blog-box">
        <span class="time">${element.time}</span>
        <div class="blog-title"><a class="box-title-a" target="_blank" href="${element.url}">${element.title}</a></div>
        <a class="main-url-a" href="${element.url}" target="_blank" >Read more</a>
        </div>`
    })
    blogs.innerHTML=str;
}

fetch_data(url);