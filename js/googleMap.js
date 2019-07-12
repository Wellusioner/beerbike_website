function initMap() {
      var location = {
          lat: 56.947501,
          lng: 24.106098
        },
				icon = {
        	url: './images/marker.png',
					scaledSize: new google.maps.Size(72, 96)
				}

      var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 16
      });
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: icon
      });
    }