/**
 * Created by dev on 7/6/17.
 */
window.onload=function() {
    var input = document.getElementById('city');

    var btn = document.getElementById('btn');
    var main= document.getElementById('main');
    var temp= document.getElementById('temp');
    btn.onclick = function () {
        console.log(input.value);
        var URL = new XMLHttpRequest();
        var map = new XMLHttpRequest();
        URL.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=24250869cf79a167ca0be1b857666ce0&units=metric', false);
        map.open("GET",' src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjwwQqFBZ6Q1YYtg8GTXSwg_yJmEZySdI&callback=initMap">')
        URL.send(null);
        var r = JSON.parse(URL.response);
        temp.innerHTML+=(r.main.temp+'<span>'+'&#8451'+'</span>'+'</br>');
        main.innerHTML+=("Humidity:" + r.main.humidity+'</br>');
        main.innerHTML+=("Location:" + r.main.name+'</br>');
        main.innerHTML+=("Minimum Temperature:" + r.main.temp_min+'</br>');
        main.innerHTML+=("Maximum Temperature:" + r.main.temp_max+'</br>');
        main.innerHTML+=("Wind Speed:" + r.wind.speed+'</br>');
       console.log(r);
    }
};

