/*
    Assignment #4
    {Riya Shah}
*/

$(function () {
    // your code here

   
    // var longitude;
    //var latitude;

    navigator.geolocation.getCurrentPosition(success, () => {
    console.log("Please enable geolocation in order to see your coordinates");
    });
    
     function success (position) {

        if(localStorage.length>0){

            $("div#locationhere").html("The longitude is :" + position.coords.longitude +" "+" The latitide is :" + position.coords.latitude);
            console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);

            let iflatitude= localStorage.getItem("latitude");;
            let iflongitude= localStorage.getItem("longitude"); ;

            $("div#locationhere").append(" " +"and the local storage "+" retrvie latitude is :" + iflatitude +" "+"and retrvie longitude is :" + iflongitude);
            console.log("retrived latitude from local stroage is" ,iflatitude);
            console.log("retrived longitude from local stroage is" ,iflongitude);
    
            $("header").append(`<h1>Welcome Back!</h1>`);

            var lat2 = position.coords.latitude;
            var lon2 =position.coords.longitude;
        
            var lat1 = iflatitude
            var lon1= iflongitude;
        
            console.log(calcDistanceBetweenPoints(lat1, lon1, lat2, lon2));
          
            $("#locationhere").append(`<p>The distance travelled by latitude is : ${lat2 - lat1} meters </p>`);
            $("#locationhere").append(`<p>The distance travelled by longitude is : ${lon2 - lon1} meters </p>`); 

        }else{

        $("div#locationhere").html(" The longitude is :" + position.coords.longitude +" "+" The latitide is :" + position.coords.latitude);
        console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);

        let longitude=  position.coords.longitude;
        let latitude = position.coords.latitude;

        $("header").append(`<h1>Welcome for First time</h1>`);

        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
        };

    /*    console.log("Position object: ", position);
        console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);

      
        longitude = position.coords.longitude;
        latitude=  position.coords.latitude;

        $("div#locationhere").html("longitude is :" + position.coords.longitude +" "+"latitide is :" + position.coords.latitude);
  
         
        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);

        localStorage.getItem("latitide");
        localStorage.getItem("longitude");

        console.log("retrived latitude from local stroage is" ,latitude);
        console.log("retrived longitude from local stroage is" ,longitude);

        $("#locationhere").append(" and the local storage "+"retrvie local longitude is :" +longitude +" "+" retrive local latitide is :" +latitude);
               
        $("header").append(`<h1>Welcome back </h1>`);
        
        var y = latitude - position.coords.latitude;
    var x = longitude - position.coords.longitude;

    calcDistanceBetweenPoints(y);

     console.log("the latitude distnace travlled is",y);
      console.log("the longitude distnace travlled is",x);
 */


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }


};

});




