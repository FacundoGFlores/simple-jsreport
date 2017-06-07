var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
	template: {'shortid':'ByRXjtBz-'},
	data: {
        'title': 'JS Report.',
        'subtitle': 'Sending data to JS report.'
    }
  }
  var options = {
      uri: 'http://localhost:3001/api/report',
      method: 'POST',
      json: data
  }
  request(options).pipe(res)
});

module.exports = router;
