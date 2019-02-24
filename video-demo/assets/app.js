// wait for dom to be ready 
document.addEventListener("DOMContentLoaded", function(event) { 

  // init vars
  var rainbowState = false;
  var rainbowTimer; // if required, rainbow can timeout after 10s, just uncomment timer code below
  var $el = document.getElementsByClassName('trigger')[0];

  // trigger on click
  $el.addEventListener("click", function(e){
    e.preventDefault();
    if(!rainbowState){
      rainbowState = true;
      $el.classList.add("rainbow");
      // rainbowTimer = setTimeout(function(){ 
      //   $el.classList.remove("rainbow");
      // }, 10000)
    } else {
      rainbowState = false;
      $el.classList.remove("rainbow");
      clearTimeout(rainbowTimer);
    }
    
  });

});


