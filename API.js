/**
 * Created by dev on 7/6/17.
 */
window.onload=function() {
    var input = document.getElementById('city');

    var btn = document.getElementById('btn');
    var main= document.getElementById('main');
    var temp= document.getElementById('temp');
    btn.onclick = function () { 
    	driver_function().
        then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

	function get_weather(url){
  		return new Promise((resolve, reject) => {
    		var URL = new XMLHttpRequest();
        	URL.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=24250869cf79a167ca0be1b857666ce0&units=metric', false);
        	var a=URL.send(null);
        	var r = JSON.parse(URL.response);
        	if(r.cod==200){
        		resolve(r);
        	}
    		else{
    			reject(false);
    		}
  		});
	}
    async function driver_function(){
        const results = get_weather();
        return results;
    }
};

