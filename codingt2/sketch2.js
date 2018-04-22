var weather;
var api ='http://api.openweathermap.org/data/2.5/weather?q=';
//var city = 'London';
var apiKey = '&appid=48652975e1d8e12e74faeb79bc452863';
var units = '&units=metric';
var input;
function setup(){
  createCanvas(400,200);
  var button = select('#submit');
	button.mousePressed(weatherAsk);
 input = select('#city');
}
	function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url,gotData);
  }
function gotData(data)
{
  //print(data);
  weather = data;
}
function draw()
{
  background(0);
  if(weather){
  ellipse(100,100,weather.main.temp,weather.main.temp)
	 ellipse(300,100,weather.main.humidity,weather.main.humidity)
	 }
}

