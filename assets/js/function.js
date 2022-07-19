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
    if(chillvibeshl==1){
        chillvibes.style.opacity=1;
        bookcafe.style.opacity=0.5;
        caferoom.style.opacity=0.5;
    }
    else if(bookcafehl==1){
        bookcafe.style.opacity=1;
        caferoom.style.opacity=0.5;
        chillvibes.style.opacity=0.5;

    }
    else if(caferoomhl==1){
        caferoom.style.opacity=1;
        bookcafe.style.opacity=0.5;
        chillvibes.style.opacity=0.5;


    }

}
function updatescreen()
{
    if(checkweather === 1 && checkday === 1) {bgVideo.src = dayClear;}
    if(checkweather === 0 && checkday === 1) {bgVideo.src = dayRainny;}
    if(checkweather === 1 && checkday === 0) {bgVideo.src = nightClear;}
    if(checkweather === 0 && checkday === 0) {bgVideo.src = nightRainny;}
}




// function showhidden(log){
//     if(log.style.display==='block'){
//         log.style.display='none';
//     }
//     else{
//         log.style.display='block';
//     }

// }
