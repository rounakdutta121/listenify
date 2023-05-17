let songs=[
    {songname:"Maana Ke Hum Yaar Nahi", filePath:"1.mp3", coverPath:"3.jpg",timestamp:"5:26"},
    {songname:"Tere Hawale", filePath:"2.mp3", coverPath:"4.jpg", timestamp:"5:50"},
    {songname:"Kabhi Jo Badal Barse", filePath:"3.mp3", coverPath:"5.jpg",timestamp:"4:14"},
    {songname:"Tera Ban Jaunga", filePath:"4.mp3", coverPath:"6.jpg", timestamp:"3:56"},
    {songname:"Khairiyat", filePath:"5.mp3", coverPath:"7.jpg", timestamp:"4:40"},
    {songname:"Kesariya", filePath:"6.mp3", coverPath:"8.jpg", timestamp:"4:28"},
    {songname:"Raatan Lambiyan", filePath:"7.mp3", coverPath:"9.jpg", timestamp:"3:50"},
    {songname:"Asal Mein", filePath:"8.mp3", coverPath:"10.jpg", timestamp:"3:44"},
    {songname:"Mujhe Peene Do", filePath:"9.mp3", coverPath:"11.jpg", timestamp:"3:13"},
    {songname:"Baarishon Mein", filePath:"10.mp3", coverPath:"12.jpg", timestamp:"4:03"},
]

let songItems = Array.from(document.getElementsByClassName('songItem'));
let songIndex=0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let audioElement= new Audio("1.mp3")
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songname;
    element.getElementsByClassName("timestamp")[0].innerText=songs[i].timestamp
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else{
        audioElement.pause();
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('plbtn')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex= parseInt(e.target.id);
        audioElement.src=`${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
    })
})
document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>=10){
         songIndex=1;
   }
   else{
       songIndex+=1;

   }
    audioElement.src=`${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
          songIndex=1;
    }
    else{
        songIndex-=1;
 
    }
     audioElement.src=`${songIndex}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
 
 })