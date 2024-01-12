
const apiKey = '0338ce78fddaf1877c80ff1ffe0ecf05'


function testCall(){
    let cityName = document.getElementById('cityInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then(response => console.log(response.json()))
    
}


function updateCity(){
    document.getElementById('display').innerHTML = 
    document.getElementById('cityInput').value;
}