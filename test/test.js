var fs = require('fs')
	, async = require('async');
var ridict = require('../lib/rid.js');
var obama = [];
var bush = [];

showComparison = function(){
	Object.keys(ridict.facets).forEach(function (key) {
		var report = key + " Obama:";
		var total = 0;
		obama.forEach(function(address) {
			report += " " + address[key];
			total += address[key];
		});
		report += " avg: " + total/4 + " Bush:";
		total = 0;
		bush.forEach(function(address) {
			report += " " + address[key];
			total += address[key];
		});
		report += " avg: " + total/4;
		console.log(report);
	});
};

fs.readdir(__dirname + '/data', function(err,files){
	if (err) console.error(err);
	files.sort();
	files.forEach(function(item){
		fs.readFile(__dirname + '/data/' + item, 'utf-8', function(err, data){
			if (err) console.error(err);
			var res = ridict.matches(data);
			if (item.indexOf('gb') > -1){
				bush.push(res);
			}else{
				obama.push(res);
			}
			if(obama.length + bush.length == 8){ //this is terrible flow control. do not copy
				showComparison();
			}
		});
	});
});

