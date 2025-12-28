
const display = document.getElementById("display");


function bosildi(input){
  display.value += input;
}

function toza(){
  display.value = "";
}

function chiqar(){
  
  try{
     display.value = eval(display.value);
  }
  catch{
    display.value = "Error( )";
  }
  
}