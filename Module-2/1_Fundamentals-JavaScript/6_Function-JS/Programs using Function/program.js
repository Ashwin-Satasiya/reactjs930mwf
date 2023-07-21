  // Full Address
function address(){
  var address =
    "68-75, <br> Shyam Residency, <br> Anandnagar, <br> 150 feet ring road, <br> Rajkot - 746483";
  document.write(address);
}

// Simple Interest
function simpleInt(principal, roi){
  var year=2;
  var si= principal * (roi /100) *  year;
  document.write( "Simple Interest : " +si);
}

// Compound Interest

function compoundInt(){

  var principal=500000;
  var roi=7;
  var year=1;
  
  var comAmt= principal * (1 + roi /100)*year;

  var comInt= comAmt-principal; 
  document.write("Compound Amount : "    +comAmt);
  document.write("<br>");
  document.write("Compound Interest : "  +comInt);

}

// Area of Circle

function CircleArea(){
  var radius=4;
  var pi=3.14;
  var area= pi * (Math.pow(radius,2));
  document.write("Area of circle is : " +area); 
}

// Average Marks

function AvgMarks(){
  var maths=57, chemistry=49, computer=78, css=89, html=79;
  var total = (maths+chemistry+computer+css+html);
  var average= (total/5);
  document.write("Average marks of all subject are : " +average);
}


// Area of Triangle

function TriangleArea(){

  var base=10, height=5;

  var area= (1/2 * base*height);

  document.write("Area of Triangle is : " +area);

}


// Area of Square

function SquareArea(){
  var side=12;
  var area=(Math.pow(side,2));
  document.write( "Area of Square is : " +area);
}


//Square root pow of any numbers

function sqrt(){
  var squareRoot=245.78;
  var squareNumber= Math.sqrt(squareRoot);
  document.write("Square root is : " +squareNumber);

}