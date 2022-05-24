
let genBtn=document.querySelector(".btn-gen");
let heading=document.querySelector(".heading");
let container=document.querySelector(".container")
let url = "js/admin.json";
let geturl = window.location.search.slice(1);
geturl = geturl.replace(/=/g, `":"`);
geturl = `{"` + geturl + `"}`;
// console.log(geturl);
searchItem = JSON.parse(geturl);
mainFind = searchItem.query.split('+').join(' ');
mainFind = mainFind.toLowerCase();
var str='';
//Fetch admin information
fetchAdminInformation = async () => {
    heading.innerHTML="<h1>Loading....</h1>"
    let responce = await fetch(url);
    let data = await responce.json();
    // console.log(data);
    fetchMovie(data);
};
//fetch movie information
fetchMovie = async (data) => {
    let responce = await fetch(data.moviess);
    let movie = await responce.json();
    // container.style.display="none";
    // console.table(movie);

    for (let i = 1; i < movie.length; i++) {
        let element = movie[i];
        if(element["movieKey"]==mainFind){
            if ((element["movieTitle"]).length!=0) {
                heading.innerHTML=`<h1>Download ${element["movieTitle"]} Full HD</h1>`
            }
            if((element["d480"])!=null){
                // console.log(true);
                str+=`<a target="_blank" href="${element["d480"]}"><button type="button" class="btn btn-outline-danger mx-3 my-3">Downlaod in 480p </button></a>`;
            }
            if((element["d480s2"])!=null){
                // console.log(true);
                str+=`<a target="_blank" href="${element["d480s2"]}"><button type="button" class="btn btn-outline-danger mx-3 my-3">Downlaod in 480p server 2</button></a>`;
            }
            if((element["d720"])!=null){
                str+=`<a target="_blank" href="${element["d720"]}"><button type="button" class="btn btn-outline-danger mx-3 my-3">Downlaod in 720p</button></a>`;
            }
            if((element["d720s2"])!=null){
                str+=`<a target="_blank" href="${element["d720s2"]}"><button type="button" class="btn btn-outline-danger mx-3 my-3">Downlaod in 720p Server 2</button></a>`;
            }
            
            if((element["d1080"])!=null){
                str+=`<a target="_blank" href="${element["d1080"]}"><button type="button" class="btn btn-outline-danger mx-3 my-3">Downlaod in 1080p</button></a>`;
            }
            if((element["d1080s2"])!=null){
                str+=`<a target="_blank" href="${element["d1080s2"]}"><button type="button" class="btn btn-outline-danger mx-3 my-3">Downlaod in 1080p server 2</button></a>`;
            }
        }
        container.innerHTML=`<h2 id="down" class="my-4">Download link's</h2>
        <div class="btn-gen">
            ${str}
        </div>`
        
    }
};
fetchAdminInformation();
