/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
  
  
 api.openweathermap.org/data/2.5/weather?lat=3.5011446&lon=-76.29898349999999&appid=0bda5bdbd55843f5716ea9febd9f26a7
*/

  fetch('http://api.openweathermap.org/data/2.5/weather?lat=3.5011446&lon=-76.29898349999999&appid=0bda5bdbd55843f5716ea9febd9f26a7')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    
    
     
    ciudad = myJson.name;
    document.getElementById("demo3").innerHTML = ciudad;


    coordenx = myJson.coord.lat;
    coordeny = myJson.coord.lon;
    document.getElementById("demo4").innerHTML = coordenx;
    document.getElementById("demo5").innerHTML = coordeny;



     humedad = myJson.main.humidity;
	 document.getElementById("demo").innerHTML = humedad;
	 
    y = myJson.main.temp_max;
    
    z = y - 273.15;
    
    console.log(y);
    console.log(z);
   document.getElementById("demo2").innerHTML = z;



   tempmin = myJson.main.temp_min;

   w = tempmin - 273.15; 
   document.getElementById("demo6").innerHTML = w;
   
   temp = myJson.main.temp;
   t = temp - 273.15;
   document.getElementById("demo7").innerHTML = t;


presion = myJson.main.pressure;
document.getElementById("demo8").innerHTML = presion;

clima = myJson.weather;

console.log(clima);
//document.getElementById("demo8").innerHTML = clima;




	 /*document.getElementById("demo2").innerHTML = y;*/
    
  });
  
  