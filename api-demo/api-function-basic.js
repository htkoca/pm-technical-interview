function craigslistSearchBasic() {

  // sub func - get correct image url
  function getImgUrl(imgIDs, imgCfg) {
    if (imgIDs) {
      let imgID = imgIDs.split(',')[0];
      let imgMap = imgID.split(':');
      return imgCfg[imgMap[0]].hostname + '/' + imgMap[1] + '_' + imgCfg[imgMap[0]].sizes[0] + '.jpg';
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
    let rslt = {
      'image': getImgUrl($row.querySelector('.result-image').getAttribute('data-ids'), imgCfg),
      'title': $row.querySelector('.result-title') ? $row.querySelector('.result-title').innerHTML.trim() : '',
      'date': $row.querySelector('.result-date') ? $row.querySelector('.result-date').getAttribute('datetime').trim() : '',
      'location': $row.querySelector('.result-hood') ? $row.querySelector('.result-hood').innerHTML.trim() : '',
    }
    Object.keys(rslt).forEach(key => {
      if( !rslt[key] ) delete rslt[key];
    })
    return rslt;
  }

  // main logic - fetch page using iframe
  let $rows = collectionToArray(document.body.getElementsByClassName('result-row')); // create array object of all rows
  return $rows.map($row => { // loop through all results
    return parseRow($row, window.imageConfig); // convert result array elements into objects.
  });

}

craigslistSearchBasic()
