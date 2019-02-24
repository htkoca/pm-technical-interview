// you'll notice I'm not using fetch/get here - which I can easily do.
// I don't want to re-process and re-render the target DOM manually to extract the results and grab JS image host variables.
// The downside is no 'failure' mode - 404's are not caught in this method

function craigslistSearch(searchQuery, onResult) {

  // sub func - get clean url based on search Query
  function getCleanUrl(searchQuery) {
    let query = encodeURIComponent(searchQuery).replace(/%20/g, '+');
    return 'https://toronto.craigslist.org/search/ggg?query=' + query + '&is_paid=all';
  }

  // sub func - fetch results page DOM and variables via iframe
  function fetchPage(url, onLoad) {
    console.log('getting results... stand by.')
    let $iframe = document.createElement('iframe'); // create element
    $iframe.src = url; // set up iframe url
    $iframe.onload = function (e) {  // set up iframe onload - some browsers fire this multiple times.
      if (e.target.src) { // ensure it's the correct one
        onLoad($iframe, $iframe.contentWindow, $iframe.contentWindow.document.body); // callback
      }
    };
    document.body.appendChild($iframe) // initialize iframe
    return $iframe;
  }

  // sub func - get correct image url
  function getImgUrl(imgIDs, imgCfg) {
    if (imgIDs) {
      let imgMap = imgIDs.split(":")
      return imgCfg[imgMap[0]].hostname + imgMap[1] + imgCfg[imgMap[0]].sizes[0];
    } else {
      return "";
    }
  }

  // sub func - htmlCollection to array
  function htmlCollectionToArray(collection) {
    return [].slice.call(collection)
  }

  // sub func - parse results row elements into obj
  function parseRow($row, imgCfg) {
    return {
      'image': getImgUrl($row.querySelector('.result-image').getAttribute('data-ids'), imgCfg),
      'title': $row.querySelector('.result-title') ? $row.querySelector('.result-title').innerHTML : "",
      'date': $row.querySelector('.result-date') ? $row.querySelector('.result-date').getAttribute('datetime') : "",
      'location': $row.querySelector('.result-hood') ? $row.querySelector('.result-hood').innerHTML : "",
    }
  }

  // main logic - fetch page using iframe
  fetchPage(getCleanUrl(searchQuery), function ($iframe, iframeScope, iframeBody) {
    let $rows = htmlCollectionToArray(iframeBody.getElementsByClassName('result-row')); // create array object of all rows
    var rslt = $rows.map(function ($row) { // loop through all results
      return parseRow($row, iframeScope.imageConfig); // convert result array elements into objects.
    });
    if(onResult){ // if callback supplied
      onResult(rslt) // log results to callback
    } else {
      console.log(rslt); // log results to console
    }
    $iframe.parentElement.removeChild($iframe); // remove iframe element
  })

  // return something in case
  return "data to be returned via console"

}

craigslistSearch('designer');
craigslistSearch('student');
craigslistSearch('music');
craigslistSearch('music', function(rslt){
  console.log(rslt);
});
craigslistSearch('');