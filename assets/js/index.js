checksreenhightlight();
dayNight.addEventListener('click',changeScene);
weaTher.addEventListener('click',changeweaTher);
// taskItemscreen.addEventListener('click',showhidden('sreenBoard'));
taskItemscreen.addEventListener('click',()=>{
    if(sreenBoard.style.display==='block'){
                sreenBoard.style.display='none';
            }
            else{
                sreenBoard.style.display='block';
            }
});

sreenBoard.addEventListener('click',function(event){
event.stopPropagation();
})



caferoom.addEventListener('click',caferoomchange);
bookcafe .addEventListener('click',bookcafechange);
chillvibes.addEventListener('click',chillvibeschange);


playBtn.addEventListener('click',function(){
    if(isPlaying===false){
        console.log('play...');
        audio.play();   
        isPlaying=true;  
        playBtn.src="./assets/img/pause.png";
    }
    else{
        console.log('pause...');

        audio.pause();
        isPlaying=false;
        playBtn.src="./assets/img/play.png";

        
    }
})


















































// caferoom.addEventListener('click',()=>{
//     console.log('caferoom....');
//      dayClear='./assets/videos/CafeDay.mp4';
//  nightClear='./assets/videos/CafeNight.mp4';
//  dayRainny='./assets/videos/CafeRainyDay.mp4';
//  nightRainny='./assets/videos/CafeRainyNight.mp4';
//  updatescreen();
//  chillvibeshl = 0;
//  bookcafehl = 0;
//  caferoomhl = 1;
//  checksreenhightlight();
// });

// caferoom.addEventListener('click',()=>{
//     console.log('caferoom....');
//      dayClear='./assets/videos/CafeDay.mp4';
//  nightClear='./assets/videos/CafeNight.mp4';
//  dayRainny='./assets/videos/CafeRainyDay.mp4';
//  nightRainny='./assets/videos/CafeRainyNight.mp4';
//  updatescreen();
//  chillvibeshl = 0;
//  bookcafehl = 0;
//  caferoomhl = 1;
//  checksreenhightlight();
// });

