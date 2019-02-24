document.addEventListener("DOMContentLoaded", function(event) { 

  var $el = document.getElementsByClassName('trigger')[0];
  $el.addEventListener("click", function(e){
    e.preventDefault();
    $el.classList.add("rainbow");
    setTimeout(function(){
      $el.classList.remove("rainbow");
    }, 10000)
  });

});


