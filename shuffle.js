//Algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
exports.shuffle = shuffle;



/**
*
* assigningShuffled
*
**/
function randomIndexFromArray(a) {
  return Math.floor(a.length * Math.random())
}
function randomElementFromArray(a) {
  return a[randomIndexFromArray(a)]
}
function assigningShuffled(a) {
  var copyAux = a.slice()
  var result = {}
  for (var i = 0; i < a.length; i++) {
    var randomI = randomIndexFromArray(copyAux)
    result[a[i]] = copyAux[randomI]
    copyAux.splice(randomI, 1)
  }
  return result;
}
exports.assigningShuffled = assigningShuffled;