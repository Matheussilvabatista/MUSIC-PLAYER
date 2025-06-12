const musicPlayer = document.getElementById("music-player")
const musicTitle = document.getElementById("music-title")
const musicArtist = document.getElementById("music-artist")
const playbackButton = document.getElementById("playback-button")
const playButton = document.getElementById("play-button")
const forwardButton = document.getElementById("forward-button")
const currentTime = document.getElementById("current-time")
const endTime = document.getElementById("end-time")
const progress = document.getElementById("progress")
const musicAlbum = document.getElementById("music-album")
const pauseButton = document.getElementById("music-pause")


const musics = [
    {
        caminhoDaMusica: "./music/m1.mp3",
        tituloDaMusica: "Musica 01",
        artista: "Neelix",
        album: "./assets/music-img.png",

    },
    {
        caminhoDaMusica: "./music/m2.mp3",
        tituloDaMusica: "Musica 02",
        artista: "Vegas",
        album: "./assets/music-img.png",

    },
    {
        caminhoDaMusica: "./music/m3.mp3",
        tituloDaMusica: "Musica 03",
        artista: "Astrix",
        album: "./assets/music-img.png",

    },

]

function getMusic() {
    musicPlayer.src = musics[0].caminhoDaMusica
    musicAlbum.src = musics[0].album
    musicTitle.innerText = musics[0].tituloDaMusica
    musicArtist.innerText = musics[0].artista

}
function nextmusic() {
    musicPlayer.src = musics[1].caminhoDaMusica
    musicAlbum.src = musics[1].album
    musicTitle.innerText = musics[1].tituloDaMusica
    musicArtist.innerText = musics[1].artista

}
function previousmusic() {
    musicPlayer.src = musics[0].caminhoDaMusica
    musicAlbum.src = musics[0].album
    musicTitle.innerText = musics[0].tituloDaMusica
    musicArtist.innerText = musics[0].artista

}
getMusic()


playButton.addEventListener("click", function () {
    musicPlayer.play()

})

pauseButton.addEventListener("click", function () {
    musicPlayer.pause()

})

forwardButton.addEventListener("click", function () {
    nextmusic()
    musicPlayer.play()

})

playbackButton.addEventListener("click", function () {
    previousmusic()

})

