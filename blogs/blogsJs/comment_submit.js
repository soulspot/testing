jQuery('#frmSubmit').on('submit',function(e){
    e.preventDefault();
    // loading.style.display="block";
    
    jQuery('#btnSubmit').attr('disabled',true);
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbwOMHN1ubWRHd2bTlqPi1dojykJcwR5JLUqjjPgAFVo-GdRbNZlfbn5p7i2aaRRA4wnlQ/exec',
        type:'post',
        data:jQuery('#frmSubmit').serialize(),
        success:function(result){
            // loading.style.display="none";
            jQuery('#frmSubmit')[0].reset();
            jQuery('#btnSubmit').attr('disabled',false);
            //window.location.href='';
            // location.reload();
        }
    });
  });