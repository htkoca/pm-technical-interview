function craigslistSearchBasic() {

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
  function collectionToArray(collection) {
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
  let $rows = collectionToArray(document.body.getElementsByClassName('result-row')); // create array object of all rows
  return $rows.map(function ($row) { // loop through all results
    return parseRow($row, window.imageConfig); // convert result array elements into objects.
  });

}

craigslistSearchBasic()