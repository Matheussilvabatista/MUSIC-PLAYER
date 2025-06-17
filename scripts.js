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

var musicaAtual = 0

function getMusic(indexMusica) {
    musicPlayer.src = musics[indexMusica].caminhoDaMusica
    musicAlbum.src = musics[indexMusica].album
    musicTitle.innerText = musics[indexMusica].tituloDaMusica
    musicArtist.innerText = musics[indexMusica].artista

    musicaAtual = indexMusica

}

getMusic(musicaAtual)

function nextmusic() {
    getMusic(musicaAtual + 1)
    musicPlayer.play()

}
function previousmusic() {
    getMusic(musicaAtual - 1)
    musicPlayer.play()
}

getMusic(musicaAtual)


playButton.addEventListener("click", function () {
     playButton.style.display = "none"
    pauseButton.style.display = "flex"
    musicPlayer.play()

})

pauseButton.addEventListener("click", function () {
    playButton.style.display = "flex"
    pauseButton.style.display = "none"
    musicPlayer.pause()

})

forwardButton.addEventListener("click", function () {
    nextmusic()
    

})

playbackButton.addEventListener("click", function () {
    previousmusic()

})

