var mybutton = document.getElementById("myBtn");
var colourCanged = false;
var myTitle = document.getElementById("mytitle");  


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};




function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



/*function mouseDown() {
    mybutton.textContent = "Click";    
}*/


function mouseUp() {
    mybutton.textContent = "Go to top ↑";
}

function changeColour() {
    if (!colourCanged) {
        mybutton.style.background='#000000';
    } else {
        mybutton.style.background='#ff0000';
    }

    colourCanged = !colourCanged
}


function gotToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // myTitle.textContent = myTitle.textContent + "+";
    
}
