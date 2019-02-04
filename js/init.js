class Map {

    initMap(div) {
        this.HUDPlace();
        this.lat = 48.852969;
        this.lon = 2.349903;
        this.lat_perso;
        this.long_perso;
        this.infowindow;
        this.infoWindow = new google.maps.InfoWindow();
        this.pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
        this.latlng = new google.maps.LatLng(50.6760032, 1.86507089);
        this.HUD;
        this.results = [];
        this.markerCenter;
        //this.rectangle;
        this.load = null;
        this.commentID = [];
        this.comment = [];
        this.markerClick = [];

        this.minFiltre = 0;
        this.maxFiltre = 5;
        this.choixFiltre = 0;


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat_perso = position.coords.latitude;
                var long_perso = position.coords.longitude;


                map.lat = lat_perso;
                map.lon = long_perso;
            })
        }


        /**chooseyourboss
        remixjobs
        welcomtojthejungle
        talent.io
        chasseurdetete
        **/
        window.scroll(0, 0);

        console.log(this.lon)

        this.map = new google.maps.Map(document.getElementById(div), {
            center: {
                lat: this.lat,
                lng: this.lon
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



        $('body').append('<div class="loadingScreen"><img src="./img/loaderSite.gif"></div>')

        google.maps.event.addListener(map.map, 'tilesloaded', function () {
            if (map.load === null) {
                map.load = "isLoaded";


                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {

                        var lat_perso = position.coords.latitude;
                        var long_perso = position.coords.longitude;
                        var pos = {
                            lat: lat_perso,
                            lng: long_perso
                        };
                        map.map.setCenter(pos);
                        map.creationMarker();
                        //map.createRectangle();

                        map.decouvreResto();
                        $('.loadingScreen').delay(2000).fadeOut(500);

                    })
                    var onclick = 0;
                    map.CreationFiltre();
                    map.map.addListener('click', function (e) {
                        if (onclick === 0) {
                            onclick = 1;
                            $('body').append('<div class="ajoutMarkerName"><input type="text"><h2>Créer</h2></div>')
                            $('.ajoutMarkerName h2').click(function () {
                                var val = $('.ajoutMarkerName input').val();
                                if (val != "") {
                                    map.createMarkerClick(e.latLng, val);
                                }
                                $('.ajoutMarkerName').remove()

                                onclick = 0;

                            })
                        }



                    });
                }



                //map.RedecouvreResto();

                /**var markerCluster = new MarkerClusterer(map.map, map.results, {
                imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'

            });**/



            }

        });



    }

    createMarkerClick(location, nom) {
        var nb = this.markerClick.length;
        map.markerClick[nb] = new google.maps.Marker({
            position: location,
            map: map.map,
            title: nom,
            rating: "0",
            animation: google.maps.Animation.DROP,
            icon: {
                url: './img/marker2.png',
                scaledSize: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16)

            }
        });

        map.addHUD(nb, map.markerClick[nb]);


    }


    creationMarker() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(map.map.getBounds().getSouthWest().lng())
                var lat_perso = position.coords.latitude;
                var long_perso = position.coords.longitude;
                var pos = {
                    lat: lat_perso,
                    lng: long_perso
                };
                map.map.setCenter(pos);
                //map.createRectangle();
                let myLatlng_perso = new google.maps.LatLng(map.map.getCenter().lat(), map.map.getCenter().lng());

                //alert(myLatlng_perso)
                map.markerCenter = new google.maps.Marker({
                    position: myLatlng_perso,
                    map: map.map,
                    title: "Votre position",
                    //animation: google.maps.Animation.DROP,
                    icon: {
                        url: './img/marker4.png',
                        scaledSize: new google.maps.Size(32, 32),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(16, 16)

                    }


                });






            }, function () {
                this.map.handleLocationError(true, infoWindow, this.map.getCenter());
            });
        }

        this.map.addListener('dragend', function () {
            var latLng = new google.maps.LatLng(map.map.getCenter().lat(), map.map.getCenter().lng());
            map.CreationFiltre();
            map.colorFilter()
            //map.removeRectangle();
            map.map.setCenter(latLng);
            map.map.center = latLng;
            map.removeAllMarker();
            //map.reCreateRectangle();
            map.recreateMarkerCenter();
            map.RedecouvreResto();
            map.detectMarkerClick();


        });





    }

    clickHUDNewMarker(id) {
        let marker = map.markerClick[id];

        //let Adresse = place.formatted_address;
        let Nom = marker.title;

        //let Numeros = place.formatted_phone_number;
        $('.contenu_resto').attr('id', id)


        //console.log(place.price_level)

        $('.contenu_resto').append('<div class="header_presentation"></div>')

        $('.header_presentation').append('<div class="retour"><img src="./img/back (1).svg"></div>')
        let lat = marker.position.lat();
        let lng = marker.position.lng();
        $('.contenu_resto').append('<div class="contenu"><div class="commentaire_box"></div><div class="autre"></div></div>');
        const monthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
                            "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
                           ];

        $('.commentaire_box').append('<div class="commentaire commentaireAjout"></div>')
        $('.commentaireAjout').append('<div class="ajout"></div>')
        $('.commentaireAjout div').append('<h2>+</h2>')



        $('.contenu_resto .header_presentation').css('background-image', 'url("./img/bg_resto.png")');



        let url = "https://maps.googleapis.com/maps/api/streetview?location=" + lat + "," + lng + "&size=640x220&key=AIzaSyAluhfy6Err8NZWAUGD2HxhT1NgOcnWAVM";
        $('.autre').append('<div class="street"><img src="' + url + '"></div>')
        $('.header_presentation').append('<div class="nom_resto"><h2>' + Nom + '</h2></div>')
        $('.header_presentation .nom_resto').append('<div class="nom_etoile"></div>');

        for (var k = 0; k < marker.rating; k++) {
            $('.header_presentation .nom_resto .nom_etoile').append('<img src="img/star.svg">');
        }

        var etoile_grise = 5 - marker.rating;

        for (var j = 0; j < etoile_grise; j++) {
            $('.header_presentation .nom_resto .nom_etoile').append('<img src="img/star_grey.svg">');
        }


        map.detectionComment(id);

        $('.commentaireAjout').on('click', '.ajout', function () {

            map.addCommentArea();
        });

    }

    detectMarkerClick() {
        if (map.markerClick.length != 0) {

            for (var i = 0; i < map.markerClick.length; i++) {
                if (map.map.getBounds().contains(map.markerClick[i].position)) {
                    map.markerClick[i].setMap(map.map)
                    map.addHUD(i, map.markerClick[i]);
                } else {
                    map.markerClick[i].setMap(null)
                }
            }

        }
    }

    addHUD(id, marker) {
        console.log(marker)
        $('.HUD').prepend('<div id="' + id + '" class="restaurant restaurantAdd"></div>');
        $('#' + id + '.restaurant').append('<div class="imageResto"></div>')
        $('#' + id + '.restaurant .imageResto').css('background-image', 'url("./img/bg_resto.png")')
        $('#' + id + '.restaurant').append('<h2>' + marker.title + '</h2>');
        console.log(marker.title)

        $('#' + id + '.restaurant').append('<div class="note"></div>');

        if (marker.rating === undefined) {
            marker.rating = 0;
        }
        var rating_round = Math.round(marker.rating);
        var etoile_grise = 5 - rating_round;

        //$('.restaurant' + nb_restaurant + ' .note').append('<span>' + place.rating + '</span>');


        for (var i = 0; i < rating_round; i++) {
            $('#' + id + '.restaurant .note').append('<img src="img/star.svg">');
        }

        for (var j = 0; j < etoile_grise; j++) {
            $('#' + id + '.restaurant .note').append('<img src="img/star_grey.svg">');
        }
    }

    recreateMarkerCenter() {
        let myLatlng_perso = new google.maps.LatLng(map.map.getCenter().lat(), map.map.getCenter().lng());
        //alert(myLatlng_perso)
        map.markerCenter = new google.maps.Marker({
            position: myLatlng_perso,
            map: map.map,
            title: "Votre position",
            //animation: google.maps.Animation.DROP,
            icon: {
                url: './img/marker4.png',
                scaledSize: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16)

            }


        });


    }




    callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {

            //console.log(map.results.length)
            if (map.results.length === 0) {
                for (var i = 0; i < results.length; i++) {



                    map.createMarker(results[i]);


                }
            } else {


                for (var i = 0; i < results.length; i++) {


                    if (map.map.getBounds().contains(results[i].geometry.location)) {
                        map.createMarker(results[i]);
                    }


                }
            }







        } else {
            //alert("Pas de restaurant aux alentours")
        }

        map.gestionClick();
        map.gestionFiltre();
    }

    createMarker(place) {
        map.dataHUD(place);

        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            placeID: place.place_id,
            map: map.map,
            position: place.geometry.location,
            icon: {
                url: './img/marker3.png',
                scaledSize: new google.maps.Size(32, 32)

            },
            title: place.name,
            rating: place.rating
        });
        map.results.push(marker)
        google.maps.event.addListener(marker, 'click', function () {
            console.log("marker")
        });




    }

    removeAllMarker() {
        for (var i = 0; i < map.results.length; i++) {
            map.results[i].setMap(null);
            map.results.shift();
            i--;
        }
        $('.HUD').remove();
        //map.results = [];
        map.markerCenter.setMap(null);

    }


    decouvreResto() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                //console.log(map.rectangle.getBounds())
                var request = {
                    location: map.map.center,
                    type: ['restaurant'],
                    bounds: map.map.getBounds()
                };

                let service = new google.maps.places.PlacesService(map.map);
                service.nearbySearch(request, map.callback);



            }, function () {
                this.handleLocationError(true, infoWindow, map.map.getCenter());

            });

        } else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, map.map.getCenter());
        }
    }

    RedecouvreResto() {

        var lat_perso = map.map.getCenter().lat();
        var long_perso = map.map.getCenter().lng();
        var pos = {
            lat: lat_perso,
            lng: long_perso
        };
        //getZoom
        var request = {
            location: pos,
            type: ['restaurant'],
            bounds: map.map.getBounds()
        };

        let service = new google.maps.places.PlacesService(map.map);

        service.nearbySearch(request, map.callback);
        delete map.HUD;
        map.map.setCenter(pos);

        map.HUDPlace()


    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Erreur: Problèmpe avec le service de géolocalisation.' :
            'Erreur: Votre navigateur ne supporte pas la géolocalisation.');
        infoWindow.open(map.map);
    }

    HUDPlace() {
        $('.contenu_resto').remove();
        $('body').append('<div class="HUD"></div><div class="contenu_resto"></div>')

    }



    retrouverPlace(id_place) {
        //console.log(id_place)

        this.JSONPlace(id_place)
    }

    dataHUD(place) {
        var nb_restaurant = $('.restaurant').length + 1;
        $('.HUD').append('<div id="' + place.place_id + '" class="restaurant restaurant' + nb_restaurant + '"></div>');
        $('.restaurant' + nb_restaurant).append('<div class="imageResto"></div>')
        if (place.photos != null) {

            $('.restaurant' + nb_restaurant + ' .imageResto').css('background-image', 'url("' + place.photos[0].getUrl() + '")')
        } else {
            $('.restaurant' + nb_restaurant + ' .imageResto').css('background-image', 'url("./img/bg_resto.png")')
        }
        $('.restaurant' + nb_restaurant).append('<h2>' + place.name + '</h2>');


        $('.restaurant' + nb_restaurant).append('<div class="note"></div>');


        var rating_round = Math.round(place.rating);
        var etoile_grise = 5 - rating_round;
        //$('.restaurant' + nb_restaurant + ' .note').append('<span>' + place.rating + '</span>');


        for (var i = 0; i < rating_round; i++) {
            $('.restaurant' + nb_restaurant + ' .note').append('<img src="img/star.svg">');
        }

        for (var j = 0; j < etoile_grise; j++) {
            $('.restaurant' + nb_restaurant + ' .note').append('<img src="img/star_grey.svg">');
        }

        //console.log(Object.keys(place.placeID))
        //console.log(place.place_id)

        //this.JSONPlace(place)





    }

    JSONPlace(place_id) {
        let Nom = null;
        let Adresse = null;
        let Numeros = null;
        let Photos = null;
        let LinkPhotos = null;
        let review_auteur = null;
        let review_rating = null;
        let review_text = null;

        var request = {
            placeId: place_id,
            fields: ['name', 'rating', 'formatted_phone_number', 'formatted_address', 'photo', 'review', 'geometry', 'place_id']
        };

        let service = new google.maps.places.PlacesService(map.map);
        service.getDetails(request, this.recupDonnees);



    }

    recupDonnees(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {


            let Adresse = place.formatted_address;
            let Nom = place.name;

            let Numeros = place.formatted_phone_number;
            if (place.photos != null) {
                let Photos = place.photos[0].getUrl();
            }
            if (place.reviews != null) {
                let review_auteur = place.reviews[0].author_name;
                let review_rating = place.reviews[0].rating;
                let review_text = place.reviews[0].text;
            }

            $('.contenu_resto').attr('id', place.place_id)


            //console.log(place.price_level)

            $('.contenu_resto').append('<div class="header_presentation"></div>')

            $('.header_presentation').append('<div class="retour"><img src="./img/back (1).svg"></div>')
            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();
            $('.contenu_resto').append('<div class="contenu"><div class="commentaire_box"></div><div class="autre"></div></div>');
            const monthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
                                "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
                               ];

            if (place.reviews != null) {

                for (var i = 0; i < place.reviews.length; i++) {

                    var dateReview = new Date(place.reviews[i].time * 1000);
                    if (dateReview.getYear() > 100) {
                        var year = dateReview.getYear() + 1900;
                    }

                    var dateFinal = dateReview.getDate() + " " + monthNames[dateReview.getMonth()] + " " + year;

                    $('.commentaire_box').append('<div class="commentaire commentaire' + i + '"></div>')
                    $('.commentaire' + i).append('<img class="profil" src="' + place.reviews[i].profile_photo_url + '">')
                    $('.commentaire' + i).append('<h2>' + place.reviews[i].author_name + '<span>' + dateFinal + '</span></h2>')
                    $('.commentaire' + i).append('<div class="etoile"></div>')

                    for (var k = 0; k < place.reviews[i].rating; k++) {
                        $('.commentaire' + i + ' .etoile').append('<img src="img/star.svg">');
                    }

                    var etoile_grise = 5 - place.reviews[i].rating;

                    for (var j = 0; j < etoile_grise; j++) {
                        $('.commentaire' + i + ' .etoile').append('<img src="img/star_grey.svg">');
                    }

                    //$('.commentaire' + i).append('<h3>' + place.reviews[i].rating + '</h3>')
                    $('.commentaire' + i).append('<p>' + place.reviews[i].text + '</p>')








                    /**console.log("%c*****************", 'color:green; font-weight: bold');
                    console.log('%cAuteur = ' + place.reviews[i].author_name, 'color:blue');
                    console.log('%cNote = ' + place.reviews[i].rating, 'color:blue');
                    console.log('%cCommentaire = ' + place.reviews[i].text, 'color:blue');**/

                }
                $('.commentaire_box').append('<div class="commentaire commentaireAjout"></div>')
                $('.commentaireAjout').append('<div class="ajout"></div>')
                $('.commentaireAjout div').append('<h2>+</h2>')
            }




            if (place.photos != null) {

                //console.log('Photo_url= ' + place.photos[0].getUrl());
                $('.autre').append('<div class="image_box"></div>')
                $('.contenu_resto .header_presentation').css('background-image', 'url("' + place.photos[0].getUrl() + '")');
                //$('.contenu_resto .header_presentation').css('background-image', 'url("' + url + '")');

                //https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=AIzaSyAluhfy6Err8NZWAUGD2HxhT1NgOcnWAVM

                //console.log(url)


                var image = [];
                for (var j = 1; j < place.photos.length; j++) {


                    $('.contenu .autre .image_box').append('<div class="image image' + j + '"></div>');
                    $('.contenu .autre .image_box .image' + j).append('<div class="loader"><img src="./img/loader.gif" class="loader_image"></div>')
                    image[j] = new Image();
                    $(image[j]).fadeOut(1)
                    image[j].onload = function () {
                        $('.image_box .image' + j + ' .loader').css('display', 'none')
                        $(this).fadeIn(300);

                    }
                    image[j].src = place.photos[j].getUrl();

                    $(image[j]).appendTo('.contenu .autre .image_box .image' + j);


                    //$('.contenu .autre .image_box .image').append('<img class="image_resto_' + j + '" src="' + place.photos[j].getUrl() + '">');



                }

            } else {
                $('.contenu_resto .header_presentation').css('background-image', 'url("./img/bg_resto.png")');
            }



            let url = "https://maps.googleapis.com/maps/api/streetview?location=" + lat + "," + lng + "&size=640x220&key=AIzaSyAluhfy6Err8NZWAUGD2HxhT1NgOcnWAVM";
            $('.autre').append('<div class="street"><img src="' + url + '"></div>')
            //console.log("%c▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮", 'color:red; font-weight: bold');
            $('.header_presentation').append('<div class="nom_resto"><h2>' + Nom + '</h2></div>')
            $('.header_presentation .nom_resto').append('<div class="nom_etoile"></div>');

            for (var k = 0; k < place.rating; k++) {
                $('.header_presentation .nom_resto .nom_etoile').append('<img src="img/star.svg">');
            }

            var etoile_grise = 5 - place.rating;

            for (var j = 0; j < etoile_grise; j++) {
                $('.header_presentation .nom_resto .nom_etoile').append('<img src="img/star_grey.svg">');
            }


            map.detectionComment(place.place_id);

            $('.commentaireAjout').on('click', '.ajout', function () {

                map.addCommentArea();
            });
        }
    }

    addCommentArea() {
        $('.commentaireAjout').html("");
        $('.commentaireAjout').addClass("create");
        $('.commentaireAjout').append('<input type="text" class="name"><input type="number" min="0" max="5" value="0" class="rating"><textarea name="" id="" class="text"></textarea><div class="boutonCreateSend"><img src="./img/send-button.svg"></div>')

        $('.boutonCreateSend').click(function () {
            $('.commentaireAjout').removeClass("create");
            var name = $('.name').val();
            var rating = $('.rating').val();
            var text = $('.text').val();
            var id = $('.contenu_resto').attr('id');
            map.addComment(name, rating, text, 0)
        })
    }

    detectionComment(id) {
        if (map.comment.length != 0) {
            var idx = map.commentID.indexOf(id);
            var indices = [];
            while (idx != -1) {
                indices.push(idx);
                var idx = map.commentID.indexOf(id, idx + 1);
            }


            for (var i = 0; i < indices.length; i++) {
                var id = map.comment[indices[i]][0];
                var name = map.comment[indices[i]][1];
                var date = map.comment[indices[i]][2];
                var rating = map.comment[indices[i]][3];
                var text = map.comment[indices[i]][4];

                map.addComment(name, rating, text, 1);

            }

        }
    }

    addComment(name, rating, text, detection) {

        if (rating > 5) {
            rating = 5;
        }
        const monthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
                            "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
                           ];
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var monthName = monthNames[month];
        var day = now.getDate();

        var dateFinal = day + " " + monthName + " " + year;

        $('.commentaireAjout').html("");
        $('.commentaireAjout').append('<div class="ajout"></div>')
        $('.commentaireAjout div').append('<h2>+</h2>')
        var nb = $('.commentaire').length;
        var i = $('.commentaire').length + 1;

        $('.commentaireAjout').before('<div class="commentaire commentaire' + i + ' add"></div>')
        $('.commentaire' + i).append('<div class="newProfil"><h2>' + name.charAt(0).toUpperCase() + '</h2></div>')
        $('.commentaire' + i).append('<h2>' + name + '<span>' + dateFinal + '</span></h2>')
        $('.commentaire' + i).append('<div class="etoile"></div>')

        for (var k = 0; k < rating; k++) {
            $('.commentaire' + i + ' .etoile').append('<img src="img/star.svg">');
        }

        var etoile_grise = 5 - rating;

        for (var j = 0; j < etoile_grise; j++) {
            $('.commentaire' + i + ' .etoile').append('<img src="img/star_grey.svg">');
        }

        $('.commentaire' + i).append('<p>' + text + '</p>');

        var id = $('.contenu_resto').attr('id');

        var addComment = [id, name, dateFinal, rating, text]

        if (detection === 0) {
            map.commentID.push(id);

            map.comment.push(addComment);

        }




    }

    retractionRestoInfo() {
        $('.contenu_resto').css('height', '0');
        $('.contenu_resto').html("");
        $('.contenu_resto').css('top', '100%');
        $('.HUD').fadeIn(1);
        $('.HUD').html(this.HUD);
        $('.HUD').css('border-top-right-radius', '0px');
        $('.HUD').css('border-top-left-radius', '0px');
        $('.HUD').css('justify-content', 'start');
        $('.HUD').css('background', 'transparent');
        $('body').css('overflow-y', 'hidden');
        $('.filtre').fadeIn(500);

        //this.gestionClick();
    }

    gestionClick() {
        $('.contenu_resto').on('click', '.retour', function () {
            map.retractionRestoInfo();
        })

        $('.HUD').on('click', '.restaurant', function () {
            console.log('click HUD')
            delete map.HUD;
            $('body').css('overflow-y', 'auto');
            map.HUD = $('.HUD').html();
            $('.HUD').html("");
            //$('.HUD').css('top', '0px');
            $('.HUD').fadeOut(1);
            //$('.HUD').css('height', '100vh');
            $('.contenu_resto').css('min-height', '100vh');
            $('.contenu_resto').css('height', 'auto');
            $('.contenu_resto').css('top', '0px');
            var resto = $(this).clone();
            //$('.HUD').html(resto);
            $('.restaurant').css('width', '80%');
            $('.HUD').css('justify-content', 'space-around');
            $('.HUD').css('align-items', 'stretch');
            $('.HUD').css('border-radius', '0px');
            $('.HUD').css('background', 'rgba(250, 250, 250, 1)');
            $('.restaurant').css('height', '70px');
            $('.restaurant').css('margin-top', '20px');
            $('.restaurant h2').css('font-size', '25px');
            $('.restaurant h2').css('top', '50%');
            $('.note').fadeOut();
            var id = $(this).attr("id");
            if ($(this).hasClass('restaurantAdd')) {
                map.clickHUDNewMarker(id);
            } else {
                map.retrouverPlace(id);
            }


            $('.filtre').fadeOut(500);


        });

        $('.contenu_resto').on('click', '.image', function () {
            $('.contenu_resto').append('<div class="image_full">' + $(this).html() + '<img src="./img/close.svg" class="close"></div>')
            $('body').css('overflow', "hidden");
            window.scroll(0, 0);
        });

        $('.contenu_resto').on('click', '.close', function () {
            $('.image_full').remove();
            $('body').css('overflow', "auto");
        });

        $('.filtre div').click(function () {
            var id = parseInt($(this).attr('id'));
            if (map.choixFiltre === 0) {
                if (id === map.minFiltre) {

                    $('#' + map.minFiltre).removeClass('activefiltre');
                    $('#' + map.minFiltre).css('background', '#e6e6e6');
                    map.choixFiltre = 1;
                } else if (id === map.maxFiltre) {
                    $('#' + map.maxFiltre).removeClass('activefiltre');
                    $('#' + map.maxFiltre).css('background', '#e6e6e6');
                    map.choixFiltre = 2;
                }
            } else {
                if (map.choixFiltre === 1) {
                    if (id < map.maxFiltre) {

                        map.minFiltre = id;
                        map.colorFilter();
                        map.gestionFiltre();
                        map.choixFiltre = 0;
                    }
                } else if (map.choixFiltre === 2) {
                    if (id > map.minFiltre) {
                        map.maxFiltre = id;
                        map.colorFilter();
                        map.gestionFiltre();
                        map.choixFiltre = 0;
                    }
                }
            }


        })



    }

    CreationFiltre() {
        $('.filtre').remove();
        $('body').append('<div class="filtre"><div id="0">0</div><div id="1">1</div><div id="2">2</div><div id="3">3</div><div id="4">4</div><div id="5">5</div></div>')
        map.colorFilter();


    }

    colorFilter() {
        $('.filtre div').css('background', '#e6e6e6');
        $('.filtre div').removeClass('activefiltre');
        console.log(map.minFiltre)
        $('#' + map.minFiltre).css('background', '#ffff48');
        $('#' + map.maxFiltre).css('background', '#ffff48');
        $('#' + map.minFiltre).addClass("activefiltre");
        $('#' + map.maxFiltre).addClass("activefiltre");
    }

    gestionFiltre() {
        //console.log("ID: "+id)
        for (var i = 0; i < map.results.length; i++) {
            var marker = map.results[i];
            var rating = parseFloat(marker.rating)
            if (rating <= map.maxFiltre && rating >= map.minFiltre) {
                marker.setVisible(true);
                $('#' + marker.placeID).css('display', 'block')

            } else {
                $('#' + marker.placeID).css('display', 'none')
                marker.setVisible(false);
            }
        }

        //console.log('-------------------')


    }
}
