var express = require('express'),
	bodyParser = require('body-parser'),
	shuffle = require('./shuffle.js').shuffle,
	assigningShuffled = require('./shuffle.js').assigningShuffled,
	randomize_aux = require('./randomize_aux.js'),
	lasts = require('./lasts.js').lasts

var app = express()

var jugadores = ["alvaro", "antonio", "edu", "ferrer", "sergio"]
var turnos = {
edu: ["edu", "ferrer", "sergio"],
pitufos: ["ferrer", "sergio", "edu"],
sejas: ["antonio", "edu", "ferrer"],
Alvaro: ["alvaro", "antonio", "alvaro"],
Sillonball: ["sergio", "alvaro", "antonio"]
}

//Try the command for heroku: heroku config:set SLACK_VERIFY_TOKEN=adsfasdfasdf
//for mac os : export SLACK_VERIFY_TOKEN=adsfasdfasdf
var VERIFY_TOKEN = process.env.SLACK_VERIFY_TOKEN
if (!VERIFY_TOKEN) {
  console.error('SLACK_VERIFY_TOKEN is required')
  console.log('Try the command for heroku: heroku config:set SLACK_VERIFY_TOKEN=adsfasdfasdf')
  process.exit(1)
}

var KEY_CHARACTER = ','


app.get('/', function (req, res) {
	res.send('<!-- !-->')
})

// RANDOMIZE
function randomize (req, res) {
	var answer = {
			"response_type": "in_channel",
		    "text": "Smultron ha hablado. El orden random es:",
		    "attachments": [
		        {
		            "text": ""
		        }
		    ]
		}
	var elems = shuffle(req.body.text.split(KEY_CHARACTER))
	answer.attachments[0].text = randomize_aux.printList(elems)
	res.send(answer)
}
app.route('/randomize')
  .get(randomize)
  .post(bodyParser.urlencoded({ extended: true }),randomize)


// RANDOMIZE AND ASSIGN
function randomizeAndAssign (req, res) {
	var answer = {
			"response_type": "in_channel",
		    "text": "Smultron ha hablado. El orden random es:",
		    "attachments": [
		        {
		            "text": ""
		        }
		    ]
		}
	var 
	var elems = shuffle(req.body.text.split(KEY_CHARACTER))
	var result = assigningShuffled(elems)
	var arrayToPrint = randomize_aux.objectToListToPrint(result)
	answer.attachments[0].text = randomize_aux.printList(arrayToPrint)
	res.send(answer)
}
app.route('/randomizeAndAssign')
	.get(randomizeAndAssign)
	.post(bodyParser.urlencoded({ extended: true }),randomizeAndAssign)

// getLasts
function getLasts(req, res) {
	var answer = {
			"response_type": "in_channel",
		    "text": "Smultron recuerda que los jugadores actuales son:",
		    "attachments": [
		        {
		            "text": ""
		        }
		    ]
		}
	var ultimoEstado = lasts(turnos)
	arrayToPrint = {}
	for (var partida in ultimoEstado ) {
		arrayToPrint['Jugador '+ultimoEstado[partida]+''] = 'git checkout '+partida
	}
	answer.attachments[0].text = randomize_aux.objectToListToPrint(arrayToPrint)
	res.send(answer)
}
app.route('/lasts')
	.get(getLasts)
	.post(bodyParser.urlencoded({ extended: true }),getLasts)


var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})