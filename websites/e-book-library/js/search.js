let geturl=window.location.search.slice(1);
geturl=geturl.replace(/=/g,`":"`);
geturl=`{"`+geturl+`"}`;
console.log(geturl);
searchItem=JSON.parse(geturl);
mainFind=searchItem.query.split('+').join(' ');
mainFind=mainFind.toLowerCase();
console.log(mainFind)
// console.log(searchItem.query);
let search=document.getElementById("search");
let TitleMatch=false;
let CategoryMatch=false;
let authorMatch=false;




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

category_wise_search=(text1,text2)=>{
  if (text1==text2) {
    CategoryMatch=true;
    return true;
  }
  else{
    return false;
  }
}
titleSearch=(text1,text2)=>{
  result=text2.includes(text1);
  if(result){
    TitleMatch=true;
    return true;
  }
  else{
    return false;
  }
}
authorSearch=(text1,text2)=>{
  result=text2.includes(text1);
  if(result){
    authorMatch=true;
    return true;
  }
  else{
    return false;
  }

}
fetch_books=async(bookInsert)=>{
  loading.innerHTML=`<img class="m-auto" src="images/loading1.gif" alt="">`;

    let res=await fetch(url);
    let data=await res.json();
    // console.log(data)
    for (let i = 1; i < data.length; i++) {
        const element = data[i];
        eleCategory=element.category.toLowerCase();
        eleTitle=element.bookname.toLowerCase();
        eleAuthor=element.author.toLowerCase();
            if (category_wise_search(mainFind,eleCategory) || titleSearch(mainFind,eleTitle) ||authorSearch(mainFind,eleAuthor)) {
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
    if (TitleMatch) {
        search.innerText=`${count} Book Found By, ${mainFind} Name`;
    }
    else if(CategoryMatch){
      search.innerText=`${count} Book Found From, ${mainFind} Category`;
    }
    else if(authorMatch){
      search.innerText=`${count} Book Found From, ${mainFind} Author`;
    }
    else{
        search.innerText=`No Book Found No Database`;
    }
    loading.innerHTML=``;
    bookInsert.innerHTML=str;

}
fetch_books(addbook);
