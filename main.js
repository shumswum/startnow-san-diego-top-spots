$(document).ready(function() {
    // write your code here
    var uluru = {lat: 32.715738, lng: -117.1610838};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                        lt: position.coords.latitude,
                        lo: position.coords.longitude
                    };

            var blah = {lat: pos.lt, lng: pos.lo};
            var marker = new google.maps.Marker({
                position: blah,
                map: map,
                animation: google.maps.Animation.BOUNCE,
                title: "This is your current location!",
            });
          });
    }

    var $table = $("table");

    $.getJSON("data.json", function (data) {
        console.log("Boom");
        for(var i = 0; i < data.length; i++) {
            var currentRow = $("<tr></tr>");
            console.log("<td>" + data[i].name + "</td>");
            currentRow.append("<td>" + data[i].name + "</td>");
            currentRow.append("<td>" + data[i].description + "</td>");
            currentRow.append("<td><a href='https://www.google.com/maps?q=" + data[i].location[0] + "," + data[i].location[1] + "'>Hit the map</a></td>");
            $table.append(currentRow);
        }

        for(var i = 0; i < data.length; i++) {
            var coord = {lat: data[i].location[0], lng: data[i].location[1]};
            var marker = new google.maps.Marker({
                position: coord,
                map: map,
                title: data[i].description
            });
        }
    });
});


