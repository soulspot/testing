let container = document.querySelector(".container");
let url = "js/admin.json";
let str = "";
let loading=document.querySelector("#loading");
var text="";
let geturl = window.location.search.slice(1);
geturl = geturl.replace(/=/g, `":"`);
geturl = `{"` + geturl + `"}`;
// console.log(geturl);
searchItem = JSON.parse(geturl);
mainFind = searchItem.query.split('+').join(' ');
mainFind = mainFind.toLowerCase();
// console.log(mainFind)


//format date
formatDate = (dt) => {
    date = new Date(dt);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();

    if (dt < 10) {
        dt = "0" + dt;
    }
    if (month < 10) {
        month = "0" + month;
    }
    return year + "-" + month + "-" + dt;
};


//Fetch admin information
fetchAdminInformation = async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    // console.log(data);
    fetchMovie(data);
};
lowerCase=()=>{
    temp = text.toString().toLowerCase();
    return temp;
}

//fetch movie information
fetchMovie = async (data) => {
    loading.classList.remove("none");
    let responce = await fetch(data.moviess);
    let movie = await responce.json();
    for (let i = 1; i < movie.length; i++) {
        let element = movie[i];
        text=element["movieTitle"];
        if (lowerCase(text).includes(mainFind)) {
            str += `
            <a href="details.html?query=${element["movieKey"]}"><div class="card mx-3 my-3">
            <img src="${element["moviePoster"]}" class="card-img-top" alt="${element["movieTitle"]
                }'s image">
            <div class="card-body">
            <p class="card-text text-uppercase">Download <strong>${element["movieTitle"]
                }</strong> in Full HD quality <strong class="text-danger">${formatDate(
                    element["movieDate"]
                )}</strong></p>
                </div>
                </div></a>
                `;
        }
    }
    loading.classList.add("none")
    container.innerHTML = str;
};
fetchAdminInformation();
