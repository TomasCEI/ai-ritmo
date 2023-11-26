//Script for Artist page
/**
* Creates artist card html from detailed card data
* @param {*} artistCardInformation 
*/
function generateArtistCard(artistCardInformation) {
    return `<div class="playlist-card">
            <img src="${artistCardInformation.image}" alt="">
    <div class="playlist-card-body">
        <h2>${artistCardInformation.songTitle}</h2>
        <h3>${artistCardInformation.artist}</h3>
    </div>
    <i class="fa fa-ellipsis-v fa-xs" aria-hidden="true"></i>
 </div>`
 }

// Creating card content variables
const dummyCardsData = [
    {
        songTitle: "Johnny B. Goode",
        artist: "Chuck Berry",

        image: "/img/playlist-01.jpg",
    },
    {
        songTitle: "Hey Jude",
        artist: "The Beatles",

        image: "/img/playlist-02.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",

        image: "/img/playlist-03.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",

        image: "/img/playlist-04.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",

        image: "/img/playlist-05.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",

        image: "/img/playlist-06.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-07.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-08.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-09.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-10.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-11.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-12.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-13.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-14.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-15.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-16.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-17.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-18.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-19.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-20.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-21.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-22.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-23.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-24.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-25.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-26.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-27.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-28.jpg",
    },
]


// Generates html from dummyCardsData array
const artistCards = dummyCardsData.map((artistCardInformation) => {
    return generateArtistCard(artistCardInformation)
}).join('');
console.log(artistCards)

// Saves artist_card_container to use it later
const artist_cards_container = document.getElementById("artist_cards_container");

// Puts the artistCards html inside the artist_cards_container
artist_cards_container.innerHTML = artistCards

