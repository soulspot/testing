let movieKey = document.querySelector("#movieKey");
let logout=document.querySelector("#logout");
logout.addEventListener('click',()=>{
    localStorage.setItem("iMovieLogin",false);
    window.location.reload();
})
let url = "admin.json";
var size;

//Fetch admin information
fetchAdminInformation = async () => {
  let responce = await fetch(url);
  let data = await responce.json();
  // console.log(data);
  fetchMovie(data);
};

//checkLogin
checkLogin = () => {
  loginCheckVar = localStorage.getItem("iMovieLogin");
  if (loginCheckVar == "true") {
    fetchAdminInformation();
  } else {
    window.location = "index.html";
  }
};
checkLogin();

//fetch movie information
fetchMovie = async (data) => {
  let responce = await fetch(data.movies);
  let movie = await responce.json();
  size = movie.length-1;
  movieKey.value = (movie[size].movieKey) + 1;

};

jQuery("#frmSubmit").on("submit", function (e) {
  e.preventDefault();

  jQuery("#btnSubmit").attr("disabled", true);
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycby9bF0KY2YgyajD5IsBkbtAnh8t-uFAe4l4thaPC640P_NI1zDctYJIUi4st-6ZlD4u6A/exec",
    type: "post",
    data: jQuery("#frmSubmit").serialize(),
    success: function (result) {
      jQuery("#frmSubmit")[0].reset();
      setTimeout(() => {
        jQuery("#btnSubmit").attr("disabled", false);
        window.location.reload();
      }, 3000);
    },
  });

  
});
