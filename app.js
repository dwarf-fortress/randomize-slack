var express = require('express'),
	bodyParser = require('body-parser')

var app = express()


var VERIFY_TOKEN = process.env.SLACK_VERIFY_TOKEN
if (!VERIFY_TOKEN) {
  console.error('SLACK_VERIFY_TOKEN is required')
  process.exit(1)
}


app.get('/', function (req, res) {
	res.send('<!-- !-->')
})

// RANDOMIZE
function randomize (req, res) {
	var answer = {
		    "text": "It's 80 degrees right now.",
		    "attachments": [
		        {
		            "text":"JSON: "+JSON.stringify(req.body)
		        }
		    ]
		}
	res.send(answer)
}
app.route('/randomize')
  .get(randomize)
  .post(bodyParser.urlencoded({ extended: true }),randomize)


var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})