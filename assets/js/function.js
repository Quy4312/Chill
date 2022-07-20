function changeScene() {
    if (checkday === 1 && checkweather === 1) {

        
            bgVideoSub.src = nightClear;
       
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 100);
        checkday = 0;
        checkweather = 1;
    }
    else if (checkday === 1 && checkweather === 0) {
            bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 100);
        checkday = 0;
        checkweather = 0;
    }
    else if (checkday === 0 && checkweather === 1) {

            bgVideoSub.src = dayClear;

        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 100);
        checkday = 1;
        checkweather = 1;
    }
    else if (checkday === 0 && checkweather === 0) {
            bgVideoSubsrc = dayRainny;

        setTimeout(() => {
            bgVideo.src = dayRainny;
        }, 100);
        checkday = 1;
        checkweather = 0;
    }
}
// function daynight(){
//     bgVideo1Night.style.opacity='1' ;

// }
function changeweaTher() {

    if (checkweather === 1 && checkday === 1) {
            weaThericon.style.color = '#91ccc2';

            bgVideoSub.src = dayRainny;
        setTimeout(() => {
            bgVideo.src = dayRainny;
        }, 100);
        checkday = 1;
        checkweather = 0;
    }
    else if (checkweather === 0 && checkday === 1) {
        weaThericon.style.color = '#fff';
            bgVideoSub.src = dayClear;

        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 100);
        checkday = 1;
        checkweather = 1;
    }
    else if (checkweather === 1 && checkday === 0) {
        weaThericon.style.color = '#91ccc2';
            bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 100);
        checkweather = 0;
    }
    else if (checkweather === 0 && checkday === 0) {
        weaThericon.style.color = '#fff';
            bgVideoSub.src = nightClear;
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 100);
        checkday = 0;
        checkweather = 1;

    }

}
function checksreenhightlight(){
    if(chillvibeshl===1){
        console.log('chill....');
        chillvibes.style.opacity="1";
        bookcafe.style.opacity="0.5";
        caferoom.style.opacity="0.5";
    }
    else if(bookcafehl===1){
        bookcafe.style.opacity="1";
        caferoom.style.opacity="0.5";
        chillvibes.style.opacity="0.5";

    }
    else if(caferoomhl===1){
    console.log('caferoom....');

        caferoom.style.opacity="1";
        bookcafe.style.opacity="0.5";
        chillvibes.style.opacity="0.5";


    }

}
function updatescreen()
{
    if(checkweather === 1 && checkday === 1) {bgVideo.src = dayClear;}
    if(checkweather === 0 && checkday === 1) {bgVideo.src = dayRainny;}
    if(checkweather === 1 && checkday === 0) {bgVideo.src = nightClear;}
    if(checkweather === 0 && checkday === 0) {bgVideo.src = nightRainny;}
}


function caferoomchange(){
    dayClear='./assets/videos/CafeDay.mp4';
 nightClear='./assets/videos/CafeNight.mp4';
 dayRainny='./assets/videos/CafeRainyDay.mp4';
 nightRainny='./assets/videos/CafeRainyNight.mp4';
 updatescreen();
 chillvibeshl = 0;
 bookcafehl = 0;
 caferoomhl = 1;
 checksreenhightlight();
}

function chillvibeschange(){
    dayClear='./assets/videos/Day-sunny.mp4';
 nightClear='./assets/videos/Night-clear.mp4';
 dayRainny='./assets/videos/Day-rainny.mp4';
 nightRainny='./assets/videos/Night-rainny.mp4';
 updatescreen();
 chillvibeshl = 1;
 bookcafehl = 0;
 caferoomhl = 0;
 checksreenhightlight();
}

function bookcafechange(){
    dayClear='./assets/videos/ExteriorDay.mp4';
 nightClear='./assets/videos/ExteriorNight.mp4';
 dayRainny='./assets/videos/ExteriorRainyDay.mp4';
 nightRainny='./assets/videos/ExteriorRainyNight.mp4';
 updatescreen();
 chillvibeshl = 0;
 bookcafehl = 1;
 caferoomhl = 0;
 checksreenhightlight();
}



// function showhidden(name){
//     if(name.style.display==='block'){
//         console.log('block....');
//         name.style.display='none';
//     }
//     else{
//         console.log('none....');
//         name.style.display='block';
//     }

// }
