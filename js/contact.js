let loading = document.getElementById("loading");
let number = document.getElementById("number");
let Name=document.getElementById("name");
let email = document.getElementById('email');
let text = document.getElementById("msg");
phonenumber = (number) => {

    const phoneNum = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    console.log(number.value)
    if (number.value.match(phoneNum)) {
        return true;
    }
    else {

        return false;
    }

}
msg = (text) => {
    let minLength = 2;
    if (text.value.split(/\s+/).length < minLength) {
        return false;
    }
    else{
        return true;
    }
}
ValidateEmail = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}


validation = (Name,email, number,text) => {
    console.log(phonenumber(number), 1);
    if (msg(Name) && phonenumber(number) && ValidateEmail(email) && msg(text)) {
        return true;
    }
    else {
        return false;
    }
}
jQuery('#frmSubmit').on('submit', function (e) {
    e.preventDefault();
    loading.innerText="Please wait...";
    if (validation(Name,email,number,text)) {
        jQuery('#btnSubmit').attr('disabled', true);
        jQuery.ajax({
            url: 'https://script.google.com/macros/s/AKfycbzT1PK2eSDbtdyKTsvGrN17LIU66of5kZQGO6K1qLUQO3Mp031MiwxrKsVslqQZgDgA/exec',
            type: 'post',
            data: jQuery('#frmSubmit').serialize(),
            success: function (result) {
                loading.innerText="Your data submited successfully."
                setTimeout(() => {
                    loading.innerText="";
                }, 3000);
                jQuery('#frmSubmit')[0].reset();
                jQuery('#btnSubmit').attr('disabled', false);

            }
        });
        
    }
    else {
        loading.innerText="Enter valid Value";
    }
});