let detailsBox = document.querySelector(".detailsBox");
let url = "js/admin.json";
let str = "";

let loading=document.querySelector("#loading");

let geturl = window.location.search.slice(1);
geturl = geturl.replace(/=/g, `":"`);
geturl = `{"` + geturl + `"}`;
// console.log(geturl);
searchItem = JSON.parse(geturl);
mainFind = searchItem.query.split('+').join(' ');
mainFind = mainFind.toLowerCase();
// console.log(mainFind)


titleCheck=(t1,t2)=>{
    result=t1.includes(t2);
    return result;
}


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
        // console.table(element)
        if (element["movieKey"]==mainFind) {

            str = `
            <h1 class="text-center text-success py-4">Download ${element.movieTitle} ${formatDate(element["movieDate"])} (Hindi-English) || Full-HD</h1>
        <p class="tex-center my-3"><strong class="text-danger">iMovies</strong> is The Best Website/Platform For Hollywood, Bollywood and South Indian HD Movies. We Provide Direct Google Drive Download Links For Fast And Secure Downloading. Just Click On Download Button And Follow Steps To Download And Watch Movies Online For Free</p>

        <p>
            <Strong class="text-danger">StoryLine:</Strong>
            <span id="storyLine">
                ${element["storyLine"]}</span>
        </p>
        <div id="ss1" class="screenShot"><img src="${element["screenShot1"]}" alt=""></div>
        <div id="ss1" class="screenShot"><img src="${element["screenShot2"]}" alt=""></div>
        <div id="ss1" class="screenShot"><img src="${element["screenShot3"]}" alt=""></div>
        <div class="db"><a href="iMoviesCDN.html?query=${element["movieKey"]}"><button type="button" class="btn btn-success btn-lg">Download</button></a></div>
        `;
            break;
        }
        
    }
    loading.classList.add("none")
    detailsBox.innerHTML = str;
};
fetchAdminInformation();
