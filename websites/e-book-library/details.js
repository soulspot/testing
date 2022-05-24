url = "https://script.googleusercontent.com/macros/echo?user_content_key=vMNkdP6IcptvQgV_rs7cnm1D_447j3PBkXlLFudZ2PN3tWKxwsJdKYbF2dwCOQu2LYDblOLIrSqmmQx4wNetUTzBgg64hCW5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHGMRQKSaLgmvNmXLm4up8kSBg7HJsALM1SSsc05pz6_6nG1nzfew4j17A9CirNt1psOxz1k6_HmtslxRvkZhvbGo7mrZnfsow&lib=MtPQvUgiaf6WHTsncZD5j0uaoJlzzZ8rm"

let geturl=window.location.search.slice(1);
geturl=geturl.replace(/=/g,`":"`);
geturl=`{"`+geturl+`"}`;
// console.log(geturl);
searchItem=JSON.parse(geturl);
mainFind=searchItem.query.split('+').join(' ');
mainFind=mainFind.toLowerCase();
console.log(mainFind)
let bookimg=document.querySelector(".details-book-img");
let description=document.querySelector(".description");
let author=document.querySelector(".book-info");
let downloadLink="";
let input=document.querySelector("#btn");
let loading=document.querySelector(".loading");
let container=document.querySelector(".container");

formatDate=(dt)=>{
    date = new Date(dt);
year = date.getFullYear();
month = date.getMonth()+1;
dt = date.getDate();

if (dt < 10) {
  dt = '0' + dt;
}
if (month < 10) {
  month = '0' + month;
}
return(year+'-' + month + '-'+dt);
}


fetch_books = async () => {
    loading.innerHTML=`<img src="https://i.gifer.com/VAyR.gif" alt=""></img>`;
    container.style.opacity="0";
      let res = await fetch(url);
      let data = await res.json();
      console.table(data);
      for (let i = 1; i < data.length; i++) {
          const element = data[i];
          if(mainFind==element.bookid){
              bookimg.innerHTML=`<img src="${element.img}" alt="">`;
              description.innerHTML=`<h1 align="center">Book description</h1><p>${element.description}</p>`;
              author.innerHTML=`<p>Author: ${element.author}
              <br>Publish date: ${formatDate(element.date)}
              </p>`;
              downloadLink=element.link;
              loading.innerHTML="";
              loading.style.display="none";
              container.style.opacity="1";
              flag=true;
              break;
          }
      }
      if(flag!=true){
          alert("not found");
      }
  }
  fetch_books();

  input.addEventListener("click",()=>{
    window.location=downloadLink;
  })
