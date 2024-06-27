
function ifelsefunction() { 
var seltheme = document.getElementById("selcolor").value;    

 
    if(seltheme == "Maroon"){
     
        document.body.style.backgroundColor = "Maroon";
     
    }
    else if (seltheme == "Green"){
        document.body.style.backgroundColor = "Green";
    }

    else if (seltheme == "Blue"){
        document.body.style.backgroundColor = "Blue";
    }
    else if (seltheme == "Red"){
        document.body.style.backgroundColor = "Red";
    }
    else if (seltheme == "Yellow"){
        document.body.style.backgroundColor = "Yellow";
    }    
    
    else{
        document.body.style.backgroundColor = "White";
    }
} 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}