
let str = "";
let comment = document.getElementById("comment")
fetch_Comment = async () => {
    let response = await fetch("https://sheet.best/api/sheets/59162144-4e3e-406e-b156-6249d8ce39f9");
    let data = await response.json();
    console.log(data);
    data.forEach((element) => {
        if (element.approval == "1") {
            str += `<div class="comment-box">
        <div class="user-img">
            <img src="img/user.png" alt="">
        </div>
        <div class="user-comment-box">
            <div id="user_name">@${element.name}</div>
            <div id="user_comment">${element.comments}</div>
        </div>
        </div>`
        }
        
    })
    comment.innerHTML = str;
}
// console.log(str);

fetch_Comment();