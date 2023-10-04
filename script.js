

async function fetchApi(){
  

	

    let a=input.value;

	

setTimeout(()=>{
  input.value=" "
},200);

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+a;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1947e773bamsh37b2685dd0baedbp11a1fbjsn6d7ea83ab00f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result)
		
		
		
		if(result.temp>=25){
	img.src="image/sun.png";
}
else if(a.length===0){
	result.innerHTML="Enter the name ";
}
else if(result.temp<=25){
	img.src="image/sunnyday.png";
}
else if(result.temp<=15){
	img.src="image/rainy-day.png";
}

    cityName.innerHTML = a
    temp.innerHTML="Temparature: "+ result.temp+ "  Degree C";
    humity.innerHTML="Humidity: "+ result.humidity;
    cloudy.innerHTML="cloudy: "+ result.cloud_pct;
    wind.innerHTML="WindSpeed: "+result.wind_speed;
    
      


} catch (error) {
	console.error(error);
}
}



