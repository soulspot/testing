url = "https://script.googleusercontent.com/macros/echo?user_content_key=vMNkdP6IcptvQgV_rs7cnm1D_447j3PBkXlLFudZ2PN3tWKxwsJdKYbF2dwCOQu2LYDblOLIrSqmmQx4wNetUTzBgg64hCW5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHGMRQKSaLgmvNmXLm4up8kSBg7HJsALM1SSsc05pz6_6nG1nzfew4j17A9CirNt1psOxz1k6_HmtslxRvkZhvbGo7mrZnfsow&lib=MtPQvUgiaf6WHTsncZD5j0uaoJlzzZ8rm"
let addbook = document.getElementById("fetch");
let str = "";
let loading=document.getElementById("loading");

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
  loading.innerHTML=`<img class="m-auto" src="images/loading1.gif" alt="">`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const element = data[i];

    }
    for (let i = 1; i < data.length; i++) {
        const element = data[i];


        str += `
        <div class="card">
        <img src="${element.img}" class="img" alt="...">
        <div class="card-body">
            <h4 class="card-title">${element.bookname} By ${element.author}</h4>
            <div class="date-box">
                <div class="date">${formatDate(element.date)}</div>
                <div class="category">Category: ${element.category}</div>
            </div>
        </div>
        <div class="btn"><a target="_blank" href="${element.link}"><button class="btn-danger">DOWNLOAD</button></a></div>
      </div>
    `
    }
    loading.innerHTML=``;
    addbook.innerHTML = str;

}
fetch_books();