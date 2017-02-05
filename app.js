var express = require('express'),
	bodyParser = require('body-parser'),
	shuffle = require('./shuffle.js').shuffle,
	randomize_aux = require('./randomize_aux.js')

var app = express()

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


var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})