/**
*
*
*
**/
function lasts(turnos) {
  var lasts = {}
  for (var partida in turnos){
   lasts[partida] = turnos[partida][turnos[partida].length-1]
  }
  return lasts
}

exports.lasts = lasts;