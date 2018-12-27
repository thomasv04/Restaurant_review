var lat = 48.852969;
var lon = 2.349903;
var map = null;
let lat_perso;
let long_perso;
var infowindow;

function initMap() {
    this.HUDPlace();
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: lat,
            lng: lon
        },
        zoom: 13, // Nous définissons le type de carte (ici carte routière)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Nous activons les options de contrôle de la carte (plan, satellite...)
        mapTypeControl: false,
        // Nous désactivons la roulette de souris
        scrollwheel: true,
        mapTypeControlOptions: {
            // Cette option sert à définir comment les options se placent
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        },
        // Activation des options de navigation dans la carte (zoom...)
        navigationControl: true,
        navigationControlOptions: {
            // Comment ces options doivent-elles s'afficher
            style: google.maps.NavigationControlStyle.ZOOM_PAN
        },
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "gamma": "0.00"
                    },
                    {
                        "lightness": "74"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "3"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]

    });
    infoWindow = new google.maps.InfoWindow();
    //var pyrmont = new google.maps.LatLng(50.6759, 1.86502);
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
    var latlng = new google.maps.LatLng(50.6760032, 1.86507089);



    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        } else(alert("Pas de restaurant aux alentours"))
    }

    function createMarker(place) {
        this.RemplirHUD(place);
        this.gestionClick();
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP,
            icon: {
                url: '../img/marker3.png',
                scaledSize: new google.maps.Size(32, 32)

            },
            title: place.name
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });


    }



    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
                lat_perso = position.coords.latitude;
                long_perso = position.coords.longitude;
                var pos = {
                    lat: lat_perso,
                    lng: long_perso
                };
                //getZoom
                var request = {
                    location: pos,
                    radius: '5000',
                    type: ['restaurant']
                };

                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);

                //infoWindow.setPosition(pos);
                //infoWindow.setContent('Votre position');
                //infoWindow.open(map);
                map.setCenter(pos);
            },
            function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Erreur: Problèmpe avec le service de géolocalisation.' :
        'Erreur: Votre navigateur ne supporte pas la géolocalisation.');
    infoWindow.open(map);
}

function HUDPlace() {
    $('body').append('<div class="HUD"></div>')

}

function RemplirHUD(place) {
    var nb_restaurant = $('.restaurant').length + 1;
    $('.HUD').append('<div class="restaurant restaurant' + nb_restaurant + '"></div>');
    $('.restaurant' + nb_restaurant).append('<h2>' + place.name + '</h2>');
    $('.restaurant' + nb_restaurant).append('<div class="note"></div>');

    var rating_round = Math.round(place.rating);

    //$('.restaurant' + nb_restaurant + ' .note').append('<span>' + place.rating + '</span>');

    for (var i = 0; i < rating_round; i++) {
        $('.restaurant' + nb_restaurant + ' .note').append('<img src="img/star.svg">');
    }

}

function gestionClick() {
    $('.restaurant').click(function () {
        $('.HUD').css('top', '0px');
        $('.HUD').css('height', '100vh');
        var resto = $(this).clone();
        $('.HUD').html(resto);
        $('.restaurant').css('width', '80%');
        $('.HUD').css('justify-content', 'space-around');
        $('.HUD').css('align-items', 'stretch');
        $('.restaurant').css('height', '70px');
        $('.restaurant').css('margin-top', '20px');
        $('.restaurant h2').css('font-size', '25px');
        $('.restaurant h2').css('top', '50%');
        $('.note').fadeOut();

    });
}




window.onload = function () {
    initMap();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let myLatlng_perso = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //alert(myLatlng_perso)
            var marker_localisation = new google.maps.Marker({
                position: myLatlng_perso,
                map: map,
                title: "Votre position",
                animation: google.maps.Animation.DROP,
                icon: {
                    url: '../img/marker4.png',
                    scaledSize: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(16, 16)

                }


            });

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    }



};