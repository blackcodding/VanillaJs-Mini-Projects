const play = document.getElementById("play");
const img = document.querySelector("img");
const music = document.querySelector("audio");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
    name: "msc-1",
    title: "Heaven",
    artist: "Julia Michaels",
    },
    {
    name: "msc-2",
    title: "Let Me Love You",
    artist: "Justin Bieder", 
    },
    {
    name: "msc-3",
    title: "Mama",
    artist: "Jonas Blue feat. William Singe",
    },
    {
        name: "msc-4",
        title: "Shape Of You",
        artist: "Ed Sheeran",
        },
];

let isplaying = false;
//FOR PLAY FUNCTION....................................................
const playMusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("anime");
};
// FOR PAUSE FUNCTION................................................
const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    if(isplaying){
        pauseMusic();
    } else {
        playMusic();
    }
});
//CHANGING THE MUSIC DATA.................................................
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "musics/"+songs.name+".mpeg";
    img.src = "images/"+songs.name+".jpg";
};

songIndex = 0;
//loadSong(songs[1]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);