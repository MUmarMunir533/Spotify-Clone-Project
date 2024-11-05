console.log("Welcome To Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let SongItems =Array.from (document.getElementsByClassName('SongItem'));

let songs = [
    {SongName: "Salam-A-Ishaq", filepath: "songs/1.mp3", coverpath: "covers/2.jpg"},
    {SongName: "Tune 1", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {SongName: "Tune 2", filepath: "songs/3.mp3", coverpath: "covers/1.jpg"},
    {SongName: "Tune 3", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {SongName: "Tune 4", filepath: "songs/5.mp3", coverpath: "covers/2.jpg"},
    {SongName: "Tu Hukam Ta Karda", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
]
SongItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
});
// audioElement.play(); 

//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
     // Update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress);
     myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songitemsplay")).forEach((element) =>{
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');
    })
      
}
Array.from(document.getElementsByClassName("songitemsplay")).forEach((element) =>{
    element.addEventListener('click', (e) =>{
       makeAllPlays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = `songs/${songIndex+1}.mp3`;
       mastersongname. innerText = songs[songIndex].SongName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       masterplay.classList.remove('fa-circle-play');
       masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname. innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname. innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})