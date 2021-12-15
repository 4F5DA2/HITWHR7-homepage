
function print_weather(){
	var city_name = returnCitySN["cname"];
	if(city_name == "CHINA")
	{
		document.getElementById("weather_page").innerHTML = "暂时无法获得该地区天气信息，请更换网络后重新查询";
	}
	else
	{
		document.getElementById("weather_page").innerHTML = "暂时无法获得该地区天气信息，请更换网络后重新查询";
	}
}