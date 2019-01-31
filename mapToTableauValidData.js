var jObj = require('./csvjson.json');

var fs = require('fs');

var parsedJObj = jObj.map(function(obj) {
	obj.sharePopulationDisorder = parseFloat(obj.sharePopulationDisorder).toFixed(3);
	obj.litresOfConsumptionPerHeader = parseFloat(obj.litresOfConsumptionPerHeader).toFixed(3);
  
	return obj;
});

fs.writeFile('newjson.json', JSON.stringify(parsedJObj), 'utf8', callback);

function callback(){};