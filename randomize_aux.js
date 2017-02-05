//Algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

// function clean(arrayOfStrings) {
//  return arrayOfStrings.map(function(e){return e.trim()});
// }

function printList(arrayOfStrings) {
  var i = 0
  //Fill with number lists
  var aux = arrayOfStrings.map(function (e) {
    var zero = ''
    if (i<10) {
      zero = '0'
    }
    i++;
    return zero+i+'.- '+e.trim()
  })

  return aux.join(" \n");
}

exports.clean = clean;
exports.printList = printList;