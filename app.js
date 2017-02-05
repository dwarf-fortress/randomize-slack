var express = require('express'),
	bodyParser = require('body-parser'),
	shuffle = require('./shuffle.js').shuffle,
	randomize_aux = require('./randomize_aux.js')

var app = express()


var VERIFY_TOKEN = process.env.SLACK_VERIFY_TOKEN
if (!VERIFY_TOKEN) {
  console.error('SLACK_VERIFY_TOKEN is required')
  process.exit(1)
}

var KEY_CHARACTER = ','


app.get('/', function (req, res) {
	res.send('<!-- !-->')
})

// RANDOMIZE
function randomize (req, res) {
	var answer = {
		    "text": "Smultron ha hablado. El orden random es:",
		    "attachments": [
		        {
		            "text": ""
		        }
		    ]
		}
	var elems = shuffle(req.body.text.split(KEY_CHARACTER))
	answer.text = randomize_aux.printList(elems)
	res.send(answer)
}
app.route('/randomize')
  .get(randomize)
  .post(bodyParser.urlencoded({ extended: true }),randomize)


var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})