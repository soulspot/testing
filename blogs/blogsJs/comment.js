
let str = "";
let comment = document.getElementById("comment")
let url="https://script.googleusercontent.com/macros/echo?user_content_key=KY7gXkRl2SzJtaXJ6aqqFWOqd-rJVn1WnV-VLnPFMpTrz3mTB8-e-uXg1sOubpIzPoSaqHIm7LklCkHCBZw6XYLht0Iu_O_om5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPHmVNRXQqnxziZubH6HzzTRNIM55Ho23aHT-PzaH2uQjuXkA6FYRMhs4U2tOSjVexVRzELgWZ95wdOXSxnG5p3WsdxL58HLBtz9Jw9Md8uu&lib=MLrdumML1-GXorO_uNrvWZt3e90-_8rHP"
fetch_Comment = async () => {
    let response = await fetch(url);
    let data = await response.json();
    data=data.GoogleSheetData;

    for (let i = 1; i < data.length; i++) {
        const name = data[i][0];
        const comment=data[i][1];
        const approval=data[i][2];
        if (approval == "1") {
            str += `<div class="comment-box">
        <div class="user-img">
            <img src="img/user.png" alt="">
        </div>
        <div class="user-comment-box">
            <div id="user_name">@${name}</div>
            <div id="user_comment">${comment}</div>
        </div>
        </div>`
        }
        
    }   
    
    comment.innerHTML = str;
}
// console.log(str);

fetch_Comment();