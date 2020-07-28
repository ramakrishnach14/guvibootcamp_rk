
const fs = require('fs');



var data = fs.readFileSync('db.json');

var countries = JSON.parse(data);




//task is to add id key in first sample data.json file to test 

for(var i=0;i<countries.list.length;i++){
	countries.list[i]["id"] = i+1;
}
//console.log(fruits);

var countriesWithKey = JSON.stringify(countries);

fs.writeFile('db.json',countriesWithKey,finished);

function finished(err){
		console.log("all set");
}