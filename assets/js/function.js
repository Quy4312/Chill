function changeScene(){
    if(checkday===1&&checkweather===1){
        bgVideo1Night.classList.add('night-clear');
        bgVideo1Day.classList.remove('day-clear');
        bgVideo1Nightt.classList.remove('night-rainny');
        bgVideo1Dayy.classList.remove('day-rainny');
        checkday=0;
        checkweather=1;

    }
    else if(checkday===1&&checkweather===0){
        bgVideo1Night.classList.remove('night-clear');
        bgVideo1Day.classList.remove('day-clear');
        bgVideo1Nightt.classList.add('night-rainny');
        bgVideo1Dayy.classList.remove('day-rainny');
        checkday=0;
        checkweather=0;
        

    }
    else if(checkday===0&&checkweather===1){
        bgVideo1Night.classList.remove('night-clear');
        bgVideo1Day.classList.add('day-clear');
        bgVideo1Nightt.classList.remove('night-rainny');
        bgVideo1Dayy.classList.remove('day-rainny');
        checkday=1;
        checkweather=1;
        

    }
    else if(checkday===0&&checkweather===0){
        bgVideo1Night.classList.remove('night-clear');
        bgVideo1Day.classList.remove('day-clear');
        bgVideo1Nightt.classList.remove('night-rainny');
        bgVideo1Dayy.classList.add('day-rainny');
        checkday=1;
        checkweather=0;
        

    }

}
// function daynight(){
//     bgVideo1Night.style.opacity='1' ;

// }
function changeweaTher(){

    if(checkweather===1&&checkday===1){
        weaThericon.style.color= '#91ccc2';
        bgVideo1Day.classList.remove('day-clear');
        bgVideo1Night.classList.remove('night-clear');
        bgVideo1Nightt.classList.remove('night-rainny');
        bgVideo1Dayy.classList.add('day-rainny');
        checkday=1;
        checkweather=0;
    }
    else if(checkweather===0&&checkday===1)
    {
        weaThericon.style.color= '#fff';
        bgVideo1Day.classList.add('day-clear');
        bgVideo1Night.classList.remove('night-clear');
        bgVideo1Nightt.classList.remove('night-rainny');
        bgVideo1Dayy.classList.remove('day-rainny');
        checkday=1;
        checkweather=1;
    }
    else if(checkweather===1&&checkday===0)
    {
        weaThericon.style.color= '#91ccc2';
        bgVideo1Day.classList.remove('day-clear');
        bgVideo1Night.classList.remove('night-clear');
        bgVideo1Nightt.classList.add('night-rainny');
        bgVideo1Dayy.classList.remove('day-rainny');
        checkday=0;
        checkweather=0;

    }
    else if(checkweather===0&&checkday===0)
    {
        weaThericon.style.color= '#fff';
        bgVideo1Day.classList.remove('day-clear');
        bgVideo1Night.classList.add('night-clear');
        bgVideo1Nightt.classList.remove('night-rainny');
        bgVideo1Dayy.classList.remove('day-rainny');
        checkday=0;
        checkweather=1;

    }
    
}
