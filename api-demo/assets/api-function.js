function craigslistSearch(searchQuery){
  var query = encodeURIComponent(searchQuery).replace(/%20/g, '+');
  var url = 'https://toronto.craigslist.org/search/ggg?query='+query+'&is_paid=all'
  fetch(url, {
    method: 'get',
  }).then(function(response){
    console.log(response);
    // var template = document.createElement('template');
    // template.innerHTML = html.trim();
    // template.parentNode.removeChild(template)
  })
}

craigslistSearch("google woogle");