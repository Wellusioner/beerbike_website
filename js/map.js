
ymaps.ready(init)
  var myMap;

  var myOptions = {
    
      center: [55.761240, 37.662930],
      zoom: 13,
      searchControlProvider: 'yandex#search'
  };

  function init() {
    myMap = new ymaps.Map("map", myOptions);

    myMap.behaviors.disable('scrollZoom');
    markerSize = [54, 72];

    beerBike = new ymaps.Placemark([55.761240, 37.662930], {
      hintContent: "<p>Офис BeerBike</p>",
      balloonContent: "<p>Офис BeerBike</p>"
    }, {
			iconLayout: 'default#image',
			iconImageHref: "./images/marker.png",
			iconImageSize: markerSize
    });


    myMap.geoObjects
      .add(beerBike);
  }