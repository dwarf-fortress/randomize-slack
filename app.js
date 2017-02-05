var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send('<!-- !-->')
})

// RANDOMIZE
function randomize (req, res) {
	var answer = {
		    "text": "It's 80 degrees right now.",
		    "attachments": [
		        {
		            "text":"JSON: "+JSON.stringify(req.params)
		        }
		    ]
		}
	res.send(answer)
}
app.get('/randomize', randomize)
app.post('/randomize', randomize)

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})