//testing 

var request = new XMLHttpRequest();
//by city name
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=019c1fdc421af78df919a03dcd8ca1ab',true);
request.onload = function(){
	var data = JSON.parse(this.response);
	console.log(data);

}

request.send();

//by city id
request.open('GET','https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=019c1fdc421af78df919a03dcd8ca1ab',true);
request.onload = function(){
	var data = JSON.parse(this.response);
	console.log(data);

}
request.send();

