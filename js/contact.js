let loading=document.getElementById("loading");
jQuery('#frmSubmit').on('submit',function(e){
    e.preventDefault();
    loading.style.display="block";
    
    jQuery('#btnSubmit').attr('disabled',true);
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbzT1PK2eSDbtdyKTsvGrN17LIU66of5kZQGO6K1qLUQO3Mp031MiwxrKsVslqQZgDgA/exec',
        type:'post',
        data:jQuery('#frmSubmit').serialize(),
        success:function(result){
            loading.style.display="none";
            jQuery('#frmSubmit')[0].reset();
            jQuery('#btnSubmit').attr('disabled',false);
            //window.location.href='';
        }
    });
  });