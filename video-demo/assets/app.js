// wait for dom to be ready 
document.addEventListener('DOMContentLoaded', function(event) { 

  // init vars
  let rainbowState = false;
  let rainbowTimer; // if required, rainbow can timeout after 10s, just uncomment timer code below
  let $el = document.querySelector('.trigger');

  // trigger on click
  $el.addEventListener('click', function(e){
    e.preventDefault();
    rainbowState = rainbowState ? false : true;
    if(rainbowState){
      $el.classList.add('rainbow');
      // rainbowTimer = setTimeout(function(){ 
      //   $el.classList.remove('rainbow');
      // }, 10000)
    } else {
      $el.classList.remove('rainbow');
      clearTimeout(rainbowTimer);
    }
    
  });

});


