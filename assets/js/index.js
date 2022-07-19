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



caferoom.addEventListener('click',()=>{
     dayClear='./assets/videos/CafeDay.mp4';
 nightClear='./assets/videos/CafeNight.mp4';
 dayRainny='./assets/videos/CafeRainyDay.mp4';
 nightRainny='./assets/videos/CafeRainyNight.mp4';
 updatescreen();
 chillvibeshl = 0;
 bookcafehl = 0;
 caferoomhl = 1;
 checksreenhightlight();
});
checksreenhightlight();
