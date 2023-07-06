function dataValidate(){

    // For first name

    if(document.frm.fname.value==""){
        
        alert("Please enter the name");
        document.frm.fname.focus();  // cursor blink in this field
        return false;   // form not submit
    }

    var fnm=/^[A-Za-z]+$/; 
    
    if(!fnm.test(document.frm.fname.value)){
        alert("Please fill alphbabet character only");
        document.frm.fname.focus();
        return false;
    }



    // For last name

    if( document.frm.lname.value==""){
        alert("Please enter the last name");
        document.frm.lname.focus();
        return false;
    }
    
    var lnm = /^[A-Za-z]+$/;

    if(!lnm.test(document.frm.lname.value)){
        alert("Please fill alphbabet character only");
        document.frm.lname.focus();
        return false;
    }


    // For email

    if (document.frm.email.value==""){
        alert("Please enter the Email ID");
        document.frm.email.focus();
        return false;
    }


     var em= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


     if(!em.test(document.frm.email.value)){
        alert("Please enter valid Email ID");
        document.frm.email.focus();
        return false;
     }

}