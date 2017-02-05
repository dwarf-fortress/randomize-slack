var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send('Hello World!')
})

// RANDOMIZE
function randomize (req, res) {
	var answer = {
		    "text": "It's 80 degrees right now.",
		    "attachments": [
		        {
		            "text":JSON.stringify(req.body)
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