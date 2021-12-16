
function change_weather()
{
	var obj = document.getElementById("weather1");
	var cityname = obj.value;
	if(cityname != null)
	{
		obj = document.getElementById("weather-iframe");
		console.log(obj.src);
		obj.src = "https://i.tianqi.com/?c=code&a=getcode&id=7&py=" + cityname + "&icon=1";
	}
}