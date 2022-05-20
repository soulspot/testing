let container = document.querySelector(".container");
let url = "js/admin.json";
let str = "";
let btr = "";
let loading=document.querySelector("#loading");
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
//fetch movie information
fetchMovie = async (data) => {
    loading.classList.remove("none");
    let responce = await fetch(data.moviess);
    let movie = await responce.json();
    // console.table(movie);

    for (let i = 1; i < movie.length; i++) {
        let element = movie[i];
        console.table(element["priority"]);
        if (element["priority"]=="True") {
            console.log(true)
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
        if(element["priority"]=="False"){
            console.log(false)

            btr += `
            <a href="details.html?query=${element["movieKey"]}"><div class="card mx-3 my-3">
            <img src="${element["moviePoster"]}" class="card-img-top" alt="${element.movieTitle
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
    loading.classList.add("none");
    result=str.concat(btr);
    console.log(result)
    container.innerHTML =result;
};
fetchAdminInformation();
