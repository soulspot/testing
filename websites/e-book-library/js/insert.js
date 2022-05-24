let user=document.getElementById("userid");

let pass=document.getElementById("password");
let btn=document.getElementById("btnSubmit");
url="../js/admin.json"
admin_check=async(user,pass)=>{
    let response=await fetch(url);
    let data=await response.json();
    if ((user.value==data.user) && (pass.value==data.password)) {
            jQuery('#btnSubmit').attr('disabled', true);
            jQuery.ajax({
                url: 'https://script.google.com/macros/s/AKfycbyp9rlfO4EI9Ezm-5X5XAxmqvACx0jOZwTaFNZK2rDcHGocMytqx19l6-AHeY1j51yV/exec',
                type: 'post',
                data: jQuery('#frmSubmit').serialize(),
                success: function (result) {
                    jQuery('#frmSubmit')[0].reset();
                    jQuery('#btnSubmit').attr('disabled', false);
        
                }
            });
    }
    else{
        alert("Invalid password");
        jQuery('#frmSubmit')[0].reset();
        jQuery('#btnSubmit').attr('disabled', false);
    }
}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    admin_check(user,pass);
})