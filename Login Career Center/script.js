function validation(){

    if(document.frm.number.value==""){
        alert("Please fill the mobile number");
        document.frm.number.focus();
        return false;
    }


    if(document.frm.password.value==""){
        alert("Please enter your password");
        document.frm.password.focus();
        return false;
    }    

}
