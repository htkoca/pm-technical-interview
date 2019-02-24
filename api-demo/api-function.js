function craigslistSearch(searchQuery) {

  // sub func - get clean url based on search Query
  function getCleanUrl(searchQuery) {
    let query = encodeURIComponent(searchQuery).replace(/%20/g, '+');
    return 'https://toronto.craigslist.org/search/ggg?query=' + query + '&is_paid=all';
  }

  // sub func - get correct image url
  function getImgUrl(imgIDs, imgCfg) {
    if (imgIDs) {
      let imgID = imgIDs.split(',')[0];
      let imgMap = imgID.split(':');
      return imgCfg[imgMap[0]].hostname + '/' + imgMap[1] + '_' + imgCfg[imgMap[0]].sizes[0] + '.jpg';
    } else {
      return '';
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
      'title': $row.querySelector('.result-title') ? $row.querySelector('.result-title').innerHTML.trim() : '',
      'date': $row.querySelector('.result-date') ? $row.querySelector('.result-date').getAttribute('datetime').trim() : '',
      'location': $row.querySelector('.result-hood') ? $row.querySelector('.result-hood').innerHTML.trim() : '',
    }
  }

  // main logic - fetch page, use DOMparser to parse fetch results, return promise
  console.log('getting results... stand by.')
  return fetch(getCleanUrl(searchQuery))
    .then(response => {
      if (response.status === 200) {
        return response.text()
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(text => {
      let parser = new DOMParser();
      let tempDOM = parser.parseFromString(text, 'text/html').documentElement;
      let $rows = tempDOM.getElementsByClassName('result-row');
      let rslt = collectionToArray($rows).map(function ($row) { // loop through all results
        return parseRow($row, window.imageConfig); // convert result array elements into objects.
      });
      console.log(rslt);
      return rslt;
    }).catch(function (error) {
      console.error('[error]', error);
    });

}

craigslistSearch('designer');
// craigslistSearch('student');
// craigslistSearch('music').then(results => {
// // do something with results
// });
// craigslistSearch('');