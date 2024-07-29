let player = document.querySelector(".player"),
    playBtn = document.querySelector(".play"),
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next"),
    audio = document.querySelector(".audio"),
    progressCont = document.querySelector(".progress__container"),
    progress = document.querySelector(".progress"),
    imgSrc = document.querySelector(".img__src"),
    titleSinger = document.querySelector(".title__singer"),
    titleSong = document.querySelector(".title__song"),
    songImg = document.querySelector(".cover")

let singers = ['Travis Scott', '21 Savage', 'A$AP Rocky', '21 Savage', 'Kid Cudi, A$AP Rocky']
let songs = ['FE!N (feat. Playboi Carti)', 'Many Men', 'Praise The Lord (Da Shine) (feat. Skepta)', 'redrum', 'WOW']
let play = ['FE!N (feat. Playboi Carti) - Travis Scott', 'Many Men - 21 Savage', 'Praise The Lord (Da Shine) (feat. Skepta) - A$AP Rocky', 'redrum - 21 Savage', 'WOW - Kid Cudi   A$AP Rocky']


let songIndex = 0

function loadSong(song, singer, play){
    titleSinger.innerHTML = singer
    titleSong.innerHTML = song
    songImg.src = `img/cover${songIndex + 1}.jpg`
    audio.src = `audio/${play}.m4a`
}

loadSong(songs[songIndex], singers[songIndex], play[songIndex])

function playSong(){
    player.classList.add('play')
    imgSrc.src = "./img/pause.png"
    audio.play()
}

function pauseSong(){
    player.classList.remove('play')
    imgSrc.src = "./img/play.png"
    audio.pause()
}

playBtn.addEventListener("click", () => { 
    let isPlaying = player.classList.contains('play')
    if(isPlaying === false){
        playSong()
    } else {
        pauseSong()
    }
})

function nextSong(){
    songIndex ++

    if ( songIndex > songs.length - 1){
        songIndex = 0
    }    
        loadSong(songs[songIndex], singers[songIndex], play[songIndex])
        playSong()
}

nextBtn.addEventListener("click", nextSong)

function prevSong(){
    songIndex --

    if ( songIndex < 0){
        songIndex = songs.length - 1
    }    
        loadSong(songs[songIndex], singers[songIndex], play[songIndex])
        playSong()
}

prevBtn.addEventListener("click", prevSong)

function updateProgress(e){
    let {duration, currentTime} = e.srcElement
    let progressPetrcent = (currentTime / duration * 100)
    progress.style.width = `${progressPetrcent}%`
}
audio.addEventListener("timeupdate", updateProgress)

function setProgress(e){
    let width = this.clientWidth
    let clickX = e.offsetX
    let duration = audio.duration

    audio.currentTime = (clickX / width * duration)
}

progressCont.addEventListener('click', setProgress)

audio.addEventListener("ended", nextSong)

/* 
___________________________________________________________________ */

    let offset = 0
    let sliderLine = document.querySelector(".slider__line")

    document.querySelector(".next__slide").addEventListener("click", function(){
        offset += 340 
        if ( offset > 1335   ){
            offset = 0
        }
        sliderLine.style.left = -offset + 'px'
    })

    document.querySelector(".prew__slide").addEventListener("click", function(){
        offset -= 340
        if ( offset < 0 ){
            offset = 1020   
        }
        sliderLine.style.left = -offset + 'px'
    })