//----- Script for Playlist page
/**
 * Creates playlist card html from detailed card data
 * @param {*} playlistCardInformation 
 */
function generatePlaylistCard(playlistCardInformation) {
    return `<div class="playlist-card">
    <img src="${playlistCardInformation.image}" alt="">
    <div class="playlist-card-body">
        <h2>${playlistCardInformation.songTitle}</h2>
        <h3>${playlistCardInformation.artist}</h3>
        <i class="fa fa-play fa-xs" aria-hidden="true"></i>
        <span>${playlistCardInformation.views} mill</span>
        <i class="fa fa-circle fa-2xs" aria-hidden="true"></i>
        <span>${playlistCardInformation.length}</span>
    </div>
    <i class="fa fa-ellipsis-v fa-xs" aria-hidden="true"></i>
</div>`
}

// Creating card content variables
const dummyCardsData = [
    {
        songTitle: "Johnny B. Goode",
        artist: "Chuck Berry",
        views: 560,
        length: "03:01",
        image: "/img/playlist-01.jpg",
    },
    {
        songTitle: "Hey Jude",
        artist: "The Beatles",
        views: 1359,
        length: "04:02",
        image: "/img/playlist-02.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-03.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-04.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
        image: "/img/playlist-05.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        views: 502,
        length: "03:02",
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
const playlistCards = dummyCardsData.map((playlistCardInformation) => {
    return generatePlaylistCard(playlistCardInformation)
}).join('');

// Saves playlist_card_container to use it later
const playlist_cards_container = document.getElementById("playlist_cards_container");

// Puts the playlistCards html inside the playlist_cards_container
playlist_cards_container.innerHTML = playlistCards