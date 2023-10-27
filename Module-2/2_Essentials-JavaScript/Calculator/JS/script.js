
// Clear All

function clearAll(){
    document.getElementById("result").value="";
}


// Back

function backAll(){
   
    var back = document.getElementById("result").value;

    var bk = back.slice(0,-1);

    document.getElementById("result").value=bk;

}

// Display function

function display(abc){
    document.getElementById("result").value+=abc;
}


// Square Function

function sqr(){
   var abc=document.getElementById("result").value;
   
   var num = parseInt(abc);
   
   var sq = Math.pow(num,2);  
   document.getElementById("result").value=sq;
}

// Square root function

function sqrRT(){

    var xyz = document.getElementById("result").value;

    var num = parseInt(xyz);

    var sq_rt = Math.sqrt(num);

    document.getElementById("result").value=sq_rt;

}

// Final result

function final(){
    var abc = document.getElementById("result").value;

    var evaluate_val  = eval(abc);
    
    document.getElementById("result").value=evaluate_val;
}