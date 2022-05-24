let alart=document.querySelector(".msg");

jQuery('#frmSubmit').on('submit', function (e) {
    e.preventDefault();
   
  
        jQuery('#btnSubmit').attr('disabled', true);
        jQuery.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyTA2Ek3U5_17tWv5KNYZK3xWBmXlhOZ4tX5XY_FOonvUXKknWJGyl_FpUosX-WUBG9/exec',
            type: 'post',
            data: jQuery('#frmSubmit').serialize(),
            success: function (result) {
               
                jQuery('#frmSubmit')[0].reset();
                jQuery('#btnSubmit').attr('disabled', false);
                alart.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Congratulation !</strong> Your data has been submited succsfully.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            }
        });

    // https://script.google.com/macros/s/AKfycby9bF0KY2YgyajD5IsBkbtAnh8t-uFAe4l4thaPC640P_NI1zDctYJIUi4st-6ZlD4u6A/exec
        
    //

    // get link
    //https://script.google.com/macros/s/AKfycbyoXMFQBpWHkP5LIRrMcBN4GrzcMvHkGEWJ116EiZ8n_4dJ9JWuKd3nW9n5f17SwgGp/exec
});