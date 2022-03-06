let geturl=window.location.search.slice(1);
geturl=geturl.replace(/=/g,`":"`);
geturl=`{"`+geturl+`"}`;
searchItem=JSON.parse(geturl);
let search=document.getElementById("search");





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


//fetching required books
url="https://script.googleusercontent.com/macros/echo?user_content_key=vMNkdP6IcptvQgV_rs7cnm1D_447j3PBkXlLFudZ2PN3tWKxwsJdKYbF2dwCOQu2LYDblOLIrSqmmQx4wNetUTzBgg64hCW5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHGMRQKSaLgmvNmXLm4up8kSBg7HJsALM1SSsc05pz6_6nG1nzfew4j17A9CirNt1psOxz1k6_HmtslxRvkZhvbGo7mrZnfsow&lib=MtPQvUgiaf6WHTsncZD5j0uaoJlzzZ8rm"
let addbook=document.getElementById("fetch");
let loading=document.getElementById("loading");
let bool=false;
let str="";
count=0;
fetch_books=async(bookInsert)=>{
  loading.innerHTML=`<img class="m-auto" src="images/loading1.gif" alt="">`;

    let res=await fetch(url);
    let data=await res.json();
    // console.log(data)
    for (let i = 1; i < data.length; i++) {
        const element = data[i];
            if (((searchItem.query.toLowerCase())==(element.category.toLowerCase()))) {
                count=count+1;
                str+=`
                <div class="card">
                <img src="${element.img}" class="img" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${element.bookname} By ${element.author}</h4>
                    <div class="date-box">
                        <div class="date">${formatDate(element.date)}</div>
                        <div class="category">Category: ${element.category}</div>
                    </div>
                </div>
                <div class="btn"><a target="_blank" href="${element.link}"><button class="btn btn-danger">DOWNLOAD</button></a></div>
              </div>
            `
            }
    }
    if (count!=0) {
        search.innerText=`${count} Book Found from ${searchItem.query} Category`;
    }
    else{
        search.innerText=`No Book Found From ${searchItem.query} Category`;
    }
    loading.innerHTML=``;
    bookInsert.innerHTML=str;

}
fetch_books(addbook);
