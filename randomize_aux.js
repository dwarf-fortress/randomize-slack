//Algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

// function clean(arrayOfStrings) {
//  return arrayOfStrings.map(function(e){return e.trim()});
// }
// exports.clean = clean;


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

exports.printList = printList;

/**
*
*
*
**/
function objectToListToPrint(objectOfAssigned) {
  var a = [],
      i = 0
  for (var key in objectOfAssigned) {
    a[i++] = key+' =====>    '+objectOfAssigned[key]
  }
  return a
}

exports.objectToListToPrint = objectToListToPrint;