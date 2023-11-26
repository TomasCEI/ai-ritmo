//___________________________________________________________________________
//----- Script for Home page
// 1. Create Card content variables
var homeCarouselCardsData = [
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
        image: "/img/playlist-07.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-08.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-09.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-10.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-11.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-12.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-13.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-14.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-15.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-16.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-17.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-18.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-19.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-20.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-21.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-22.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-23.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-24.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-25.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-26.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-27.jpg",
    },
    {
        songTitle: "Armadillo Sol 2",
        artist: "Juan Guardado 2",
        image: "/img/playlist-28.jpg",
    },
]

/**
 * Returns a string with the HTML for one home carousel card
 * @param {Object} cardData - An object containg the data for the HTML of one card
 * @param {string} cardData.image - The url of the image for the img tag
 * @param {string} cardData.songTitle - The title of the song for the h2 tag
 * @param {string} cardData.artist - The artist of the song the the h3 tag
 * @returns string
 */
const generateHomeCarouselCardHTML = (cardData) => {
    return (
        `<div class="artist-carousel-card">
            <img src="${cardData.image}" alt="">
            <h2 >${cardData.songTitle}</h2>
            <h3>${cardData.artist}</h3>
        </div>`
    )
}

// 3. Creating cards from card contnt data
var homeCarouselCardsHTML = "";

homeCarouselCardsData.forEach(homeCarouselCardData => {
    homeCarouselCardsHTML = homeCarouselCardsHTML
        + generateHomeCarouselCardHTML({
            image: homeCarouselCardData.image,
            songTitle: homeCarouselCardData.songTitle,
            artist: homeCarouselCardData.artist
        })
});

// 4. Puts the homeCarouselCardsHTML inside the artist-carousel-container
document.getElementById('artist-carousel-container').innerHTML = homeCarouselCardsHTML

