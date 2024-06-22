let songIndex=0;
let gip=document.getElementById('gip');
let playsong= document.getElementById('playsong');
let container= document.getElementById('container');
console.log(playsong);
let myprogress=document.getElementById('myprogress');
let audioEliment= new Audio('DJ-Snake---Let-Me-Love-You-ft-Justin-Bieber(pagalworld.co.uk).mp3');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let previousSong=document.getElementById('previousSong');
let nextSong=document.getElementById('nextSong');
let gipName=document.getElementById('gipName');

  
let songs=[
    {
        songname:'let me love you',filepath:'DJ-Snake---Let-Me-Love-You-ft-Justin-Bieber(pagalworld.co.uk).mp3',coverPath:'download (1).jpeg',duration:'04:56'
    },
      {
        songname:'priyanka`s fav. song',filepath:'Kabhi Shaam Dhale(PagalWorld.com.cm).mp3',coverPath:'kabhi shaam dhale.jpg',duration:'04:56'
    },

      {
        songname:'maan meri jaan',filepath:'Maan Meri Jaan(PagalWorld.com.cm).mp3',coverPath:'maan meri jaan.jpg',duration:'04:56'
    },
    {
        songname:'heeriye',filepath:'_Heeriye(PagalWorld.com.cm).mp3',coverPath:'heeriye.jpg',duration:'04:56'
    },
    {
        songname:'tu khaa hai',filepath:'Tu Hai Kahan(PagalWorld.com.cm).mp3',coverPath:'tu hai khaa.jpg',duration:'04:56'
    }
];
songItem.forEach((element ,i)=>{
  // console.log(element,i);
  element.getElementsByTagName('img')[0].src=songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText=songs[i].songname;

});



playsong.addEventListener('click', ()=>{
    if(audioEliment.paused || audioEliment.currentTime<=0){
        audioEliment.play();
        playsong.classList.remove('fa-play');
          playsong.classList.add('fa-pause');
          gip.style.opacity=1;
        
    }
    else{
        audioEliment.pause();
          playsong.classList.add('fa-play');
          playsong.classList.remove('fa-pause');
          gip.style.opacity=0;
          
    }
    
    
  
    
})

  

audioEliment.addEventListener('timeupdate',()=>{
    progress=parseInt((audioEliment.currentTime /audioEliment.duration)*100);
myprogress.value=progress;
})
  myprogress.addEventListener('change',()=>{
audioEliment.currentTime= (myprogress.value*audioEliment.duration)/100
  })


document.body.addEventListener('keypress',(e)=>{
    
if(e.key==' ' ||e.key=='k'){
    if(audioEliment.paused || audioEliment.currentTime<=0){
        audioEliment.play();
        playsong.classList.remove('fa-play');
          playsong.classList.add('fa-pause');
          gip.style.opacity=1;
            document.querySelector('.hide').style.display = 'flex';
    }
    else{
        audioEliment.pause();
          playsong.classList.add('fa-play');
          playsong.classList.remove('fa-pause');
          gip.style.opacity=0;
               document.querySelector('.hide').style.display = 'none';
    }
    
}else if(e.key==='l'){

 console.log("Current song index:", songIndex);
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    console.log("Updated song index:", songIndex);
    audioEliment.src = songs[songIndex].filepath;
    audioEliment.play();
    gipName.innerText = songs[songIndex].songname;
    playsong.classList.remove('fa-play');
    playsong.classList.add('fa-pause');
    gip.style.opacity = 1;


}
else if(e.key==='j'){
   if(songIndex<=0){
    songIndex=0;
  }
  else{
     songIndex=songIndex-1;
     audioEliment.src= songs[songIndex].filepath;
     audioEliment.play();
     gipName.innerText=songs[songIndex].songname;
      playsong.classList.remove('fa-play');
          playsong.classList.add('fa-pause');
      gip.style.opacity=1;

  }

}

});
    let makeAllPlays=()=>{
      songItemPlay.forEach((element)=>{
  element.classList.remove('fa-pause');
     element.classList.add('fa-play');
      })
    };



    songItemPlay.forEach((element)=>{
      element.addEventListener(('click'),(e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      
      gipName.innerText=songs[songIndex].songname;
     audioEliment.src= songs[songIndex].filepath;
     audioEliment.currentTime=0;
      document.querySelector('.hide').style.display = 'flex';
     if(audioEliment.paused || audioEliment.currentTime<=0){
        audioEliment.play();
       

        playsong.classList.remove('fa-play');
          playsong.classList.add('fa-pause');
          gip.style.opacity=1;
         
    }
    else{
        audioEliment.pause();
         
          playsong.classList.add('fa-play');
          playsong.classList.remove('fa-pause');
          gip.style.opacity=0;
      
    }

      })

    });
nextSong.addEventListener('click', () => {
    console.log("Current song index:", songIndex);
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    console.log("Updated song index:", songIndex);
    audioEliment.src = songs[songIndex].filepath;
    audioEliment.play();
    gipName.innerText = songs[songIndex].songname;
    playsong.classList.remove('fa-play');
    playsong.classList.add('fa-pause');
    gip.style.opacity = 1;
});

previousSong.addEventListener(('click'),()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
     songIndex=songIndex-1;
     audioEliment.src= songs[songIndex].filepath;
     audioEliment.play();
      makeAllPlays();
     gipName.innerText=songs[songIndex].songname;
      playsong.classList.remove('fa-play');
          playsong.classList.add('fa-pause');
      gip.style.opacity=1;

  }
 
});
// Function to update duration display for each song item
function updateDurationDisplay() {
    songItem.forEach(async (element, i) => {
        let audio = new Audio(songs[i].filepath);
        await audio.addEventListener('loadedmetadata', () => {
            let duration = audio.duration;
            let minutes = Math.floor(duration / 60);
            let seconds = Math.floor(duration % 60);
            let formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            // Use getElementsByClassName or querySelector to select elements with the class 'timeDuration'
            // let timeDurationElements = element.getElementsByClassName('timeDuration');
            let timeDuration=element.getElementsByClassName('timeDuration');
            if (timeDuration.length > 0) {
                // Update the text content of the first element with the formatted duration
                timeDuration[0].innerText = formattedDuration;
            }
        });
    });
}

// Call the function to update duration display
updateDurationDisplay();

