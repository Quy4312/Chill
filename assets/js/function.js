taskItemscreen.addEventListener('click', () => {
    if (sreenBoard.style.display === 'block') {
        sreenBoard.style.display = 'none';
    }
    else {
        sreenBoard.style.display = 'block';
        soundBoard.style.display = 'none';
        timeBoard.style.display = 'none';
        musicBoard.style.display = 'none';


    }
});

sreenBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
taskTime.addEventListener('click', () => {
    if (timeBoard.style.display === 'block') {
        timeBoard.style.display = 'none';
    }
    else {
        timeBoard.style.display = 'block';
        sreenBoard.style.display = 'none';
        soundBoard.style.display = 'none';
        musicBoard.style.display = 'none';
    }
});

// timeBoard.addEventListener('click', function (event) {
//     event.stopPropagation();
// })
taskMusic.addEventListener('click', () => {
    if (musicBoard.style.display === 'block') {
        musicBoard.style.display = 'none';
    }
    else {
        musicBoard.style.display = 'block';
        timeBoard.style.display = 'none';
        sreenBoard.style.display = 'none';
        soundBoard.style.display = 'none';
        
    }
});

musicBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
taskItemsound.addEventListener('click', () => {
    if (soundBoard.style.display === 'block') {
        soundBoard.style.display = 'none';
    }
    else {
        soundBoard.style.display = 'block';
        musicBoard.style.display = 'none';
        timeBoard.style.display = 'none';
        sreenBoard.style.display = 'none';
       
    }
});

soundBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
chillkeyboardbtn.addEventListener('click', () => {
    if (chillkeyboardbtnsub.style.display === 'block') {
        chillkeyboardbtnsub.style.display = 'none';
        KeyBoardaudio.pause();
    }
    else {
        chillkeyboardbtnsub.style.display = 'block';
    }
});

chillkeyboardbtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
chillraincitybtn.addEventListener('click', () => {
    if (chillraincitybtnsub.style.display === 'block') {
        chillraincitybtnsub.style.display = 'none';
    }
    else {
        chillraincitybtnsub.style.display = 'block';
        RainCityaudio.pause();
    }
});

chillraincitybtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
// caferoomkeyboard
caferoomkeyboardbtn.addEventListener('click', () => {
    if (caferoomkeyboardbtnsub.style.display === 'block') {
        caferoomkeyboardbtnsub.style.display = 'none';
    }
    else {
        caferoomkeyboardbtnsub.style.display = 'block';
        KeyBoardaudio.pause();
    }
});

caferoomkeyboardbtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})

// caferoomraincity
caferoomraincitybtn.addEventListener('click', () => {
    if (caferoomraincitybtnsub.style.display === 'block') {
        caferoomraincitybtnsub.style.display = 'none';
    }
    else {
        caferoomraincitybtnsub.style.display = 'block';
        RainCityaudio.pause();
    }
});

caferoomraincitybtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
//caferoompeople
caferoompeoplebtn.addEventListener('click', () => {
    if (caferoompeoplebtnsub.style.display === 'block') {
        caferoompeoplebtnsub.style.display = 'none';
    }
    else {
        caferoompeoplebtnsub.style.display = 'block';
        Peopleaudio.pause();
    }
});

caferoompeoplebtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
//bookcaferaincity
bookcaferaincitybtn.addEventListener('click', () => {
    if (bookcaferaincitybtnsub.style.display === 'block') {
        bookcaferaincitybtnsub.style.display = 'none';
    }
    else {
        bookcaferaincitybtnsub.style.display = 'block';
        RainCityaudio.pause();
    }
});

bookcaferaincitybtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})
//bookcafecitytraffic
bookcafecitytrafficbtn.addEventListener('click', () => {
    if (bookcafecitytrafficbtnsub.style.display === 'block') {
        bookcafecitytrafficbtnsub.style.display = 'none';
    }
    else {
        bookcafecitytrafficbtnsub.style.display = 'block';
        CityTrafficaudio.pause();
    }
});

bookcafecitytrafficbtnsub.addEventListener('click', function (event) {
    event.stopPropagation();
})



function changeScene() {
    if (checkday === 1 && checkweather === 1) {
        bgVideoSub.src = nightClear;
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 200);

        checkday = 0;
        checkweather = 1;
    }
    else if (checkday === 1 && checkweather === 0) {
        bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 200);
        checkday = 0;
        checkweather = 0;
    }
    else if (checkday === 0 && checkweather === 1) {
        bgVideoSub.src = dayClear;
        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 200);
        checkday = 1;
        checkweather = 1;
    }
    else if (checkday === 0 && checkweather === 0) {
        bgVideoSubsrc = dayRainny;

        setTimeout(() => {
            bgVideo.src = dayRainny;
        }, 200);
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
        }, 200);
        checkday = 1;
        checkweather = 0;
    }
    else if (checkweather === 0 && checkday === 1) {
        weaThericon.style.color = '#fff';
        bgVideoSub.src = dayClear;

        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 200);
        checkday = 1;
        checkweather = 1;
    }
    else if (checkweather === 1 && checkday === 0) {
        weaThericon.style.color = '#91ccc2';
        bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 200);
        checkweather = 0;
    }
    else if (checkweather === 0 && checkday === 0) {
        weaThericon.style.color = '#fff';
        bgVideoSub.src = nightClear;
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 200);
        checkday = 0;
        checkweather = 1;

    }

}
function checksreenhightlight() {
    if (chillvibeshl === 1) {
        console.log('chill....');
        chillvibes.style.opacity = "1";
        bookcafe.style.opacity = "0.5";
        caferoom.style.opacity = "0.5";
    }
    else if (bookcafehl === 1) {
        bookcafe.style.opacity = "1";
        caferoom.style.opacity = "0.5";
        chillvibes.style.opacity = "0.5";

    }
    else if (caferoomhl === 1) {
        console.log('caferoom....');

        caferoom.style.opacity = "1";
        bookcafe.style.opacity = "0.5";
        chillvibes.style.opacity = "0.5";


    }

}
function updatescreen() {
    if (checkweather === 1 && checkday === 1) {
        bgVideoSub.src = dayClear;
        setTimeout(() => {
            bgVideo.src = dayClear;
        }, 200);

    }
    if (checkweather === 0 && checkday === 1) {
        bgVideoSub.src = dayRainny;
        setTimeout(() => {
            bgVideo.src = dayRainny;
        }, 200);


    }
    if (checkweather === 1 && checkday === 0) {
        bgVideoSub.src = nightClear;
        setTimeout(() => {
            bgVideo.src = nightClear;
        }, 200);
    }
    if (checkweather === 0 && checkday === 0) {
        bgVideoSub.src = nightRainny;
        setTimeout(() => {
            bgVideo.src = nightRainny;
        }, 200);
    }
}


function caferoomchange() {
    chillcontainer.style.display='none';
    caferoomcontainer.style.display='block';
    bookcafecontainer.style.display='none';
    Peopleaudio.pause();

    
    CityTrafficaudio.pause();
    RainCityaudio.pause();
    KeyBoardaudio.pause();
    dayClear = './assets/videos/CafeDay.mp4';
    nightClear = './assets/videos/CafeNight.mp4';
    dayRainny = './assets/videos/CafeRainyDay.mp4';
    nightRainny = './assets/videos/CafeRainyNight.mp4';
    updatescreen();
    chillvibeshl = 0;
    bookcafehl = 0;
    caferoomhl = 1;
    checksreenhightlight();
}

function chillvibeschange() {
    caferoomcontainer.style.display='none';
    bookcafecontainer.style.display='none';
    
    CityTrafficaudio.pause();
    Peopleaudio.pause();


    RainCityaudio.pause();
    KeyBoardaudio.pause();

    dayClear = './assets/videos/Day-sunny.mp4';
    nightClear = './assets/videos/Night-clear.mp4';
    dayRainny = './assets/videos/Day-rainny.mp4';
    nightRainny = './assets/videos/Night-rainny.mp4';
    updatescreen();
    chillcontainer.style.display='block';
    chillvibeshl = 1;
    bookcafehl = 0;
    caferoomhl = 0;
    checksreenhightlight();
}

function bookcafechange() {
    chillcontainer.style.display='none';
    caferoomcontainer.style.display='none';
    Peopleaudio.pause();
    CityTrafficaudio.pause();

    RainCityaudio.pause();
    KeyBoardaudio.pause();
    dayClear = './assets/videos/ExteriorDay.mp4';
    nightClear = './assets/videos/ExteriorNight.mp4';
    dayRainny = './assets/videos/ExteriorRainyDay.mp4';
    nightRainny = './assets/videos/ExteriorRainyNight.mp4';
    updatescreen();
    bookcafecontainer.style.display='block';

    chillvibeshl = 0;
    bookcafehl = 1;
    caferoomhl = 0;
    checksreenhightlight();
}

function loadSong() {
    nextBtn.addEventListener('click', function () {
        currentindex += 1;
        console.log(songs[currentindex].path);
        audio.src = songs[currentindex].path;
        namesong.textContent = songs[currentindex].name;
        if (isPlaying == true) {
            audio.play();
        }
        else {
            audio.pause();
        }

    });
    backBtn.addEventListener('click', function () {
        currentindex -= 1;
        audio.src = songs[currentindex].path;
        namesong.textContent = songs[currentindex].name;
        if (isPlaying == true) {
            audio.play();
        }
        else {
            audio.pause();
        }
    })
}
loadSong();

function renderclear() {
    setTimeout(function () {
        render.removeAttribute('src');
    }, 5000);
}
playBtn.addEventListener('click', function () {
    if (isPlaying === false) {
        console.log('play...');
        audio.play();
        isPlaying = true;
        playBtn.src = "./assets/img/pause.png";
        // volumeBar.style.width=audio.currentTime/audio.duration *100+ '%' ;
        // volumeCircle.style.left=audio.currentTime/audio.duration *100 -1+ '%' ;
    }
    else {
        console.log('pause...');

        audio.pause();
        isPlaying = false;
        playBtn.src = "./assets/img/play.png";


    }
})

let newTime = 0;
soundvolumectn.addEventListener('mousedown', () => {
    isReadyToDrag = true;
    // console.log('mousedown');
});
CityTraffic.addEventListener('mousedown', () => {
    isReadyToDragCityTraffic = true;
    // console.log('mousedown');
})
RainCity.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;
})
ForestNight.addEventListener('mousedown', () => {
    isReadyToDragForestNight = true;
})
KeyBoard.addEventListener('mousedown', () => {
    isReadyToDragKeyBoard = true;
})
envkeyboardchill.addEventListener('mousedown', () => {
    isReadyToDragKeyBoard = true;
})
envraincitychill.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;
})
envkeyboardcaferoom.addEventListener('mousedown', () => {
    isReadyToDragKeyBoard = true;
    console.log('envkeyboardcaferoom');
})
envraincitycaferoom.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;
    
})
envpeoplecaferoom.addEventListener('mousedown', () => {
    isReadyToDragPeople = true;
    
})
envraincitybookcafe.addEventListener('mousedown', () => {
    isReadyToDragRainCity = true;
    
})
envcitytrafficbookcafe.addEventListener('mousedown', () => {
    isReadyToDragCityTraffic = true;
    
})



Fan.addEventListener('mousedown', () => {
    isReadyToDragFan = true;
})
People.addEventListener('mousedown', () => {
    isReadyToDragPeople = true;
})
RainForest.addEventListener('mousedown', () => {
    isReadyToDragRainForest = true;
})
River.addEventListener('mousedown', () => {
    isReadyToDragRiver = true;
})
Waves.addEventListener('mousedown', () => {
    isReadyToDragWaves = true;
})
Wind.addEventListener('mousedown', () => {
    isReadyToDragWind = true;
})
soundvolumectn.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    // console.log(clientX);
    const left = soundvolumectn.getBoundingClientRect().left
    const width = soundvolumectn.getBoundingClientRect().width
    // console.log(left,width);

    const min = left
    const max = soundvolumectn.getBoundingClientRect().width + left
    if (isReadyToDrag && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log('mousemove');

        // console.log(percent);

        soundvolume.style.width = (percent * 100) + '%';
        soundcircle.style.left = percent * 100 + '%';

        audio.volume = percent;
        // console.log(audio.volume);
        // newTime = audio.duration * percent
        // audio.curentTime = newTime
        // console.log(audio.currentTime);
        // console.log(newTime);


    }

})
CityTraffic.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    // console.log(clientX);

    const left = CityTraffic.getBoundingClientRect().left
    const width = CityTraffic.getBoundingClientRect().width
    // console.log(left,width);



    const min = left
    const max = CityTraffic.getBoundingClientRect().width + left
    if (isReadyToDragCityTraffic && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log('mousemove');

        // console.log(percent);

        CityTrafficbar.style.width = (percent * 100) + '%';
        CityTrafficcircle.style.left = percent * 100 + '%';
        CityTrafficaudio.play();

        CityTrafficaudio.volume = percent;
        // console.log(CityTrafficaudio.volume);
        // console.log(audio.volume);



    }

})
RainCity.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = RainCity.getBoundingClientRect().left
    const width = RainCity.getBoundingClientRect().width
    const min = left
    const max = RainCity.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
    }

})
//ForestNight
ForestNight.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = ForestNight.getBoundingClientRect().left
    const width = ForestNight.getBoundingClientRect().width
    const min = left
    const max = ForestNight.getBoundingClientRect().width + left
    if (isReadyToDragForestNight && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        ForestNightbar.style.width = (percent * 100) + '%';
        ForestNightcircle.style.left = percent * 100 + '%';
        ForestNightaudio.play();
        ForestNightaudio.volume = percent;
    }

})
//KeyBoard
KeyBoard.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = KeyBoard.getBoundingClientRect().left
    const width = KeyBoard.getBoundingClientRect().width
    const min = left
    const max = KeyBoard.getBoundingClientRect().width + left
    if (isReadyToDragKeyBoard && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        KeyBoardbar.style.width = (percent * 100) + '%';
        KeyBoardcircle.style.left = percent * 100 + '%';
        KeyBoardaudio.play();
        KeyBoardaudio.volume = percent;
    }

})
//KeyBoardenvchill
envkeyboardchill.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = envkeyboardchill.getBoundingClientRect().left
    const width = envkeyboardchill.getBoundingClientRect().width
    const min = left
    const max = envkeyboardchill.getBoundingClientRect().width + left
    if (isReadyToDragKeyBoard && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        KeyBoardbar.style.width = (percent * 100) + '%';
        KeyBoardcircle.style.left = percent * 100 + '%';
        envkeyboardbarchill.style.width = (percent * 100) + '%';
        envkeyboardcirclechill.style.left = percent * 100 + '%';
        KeyBoardaudio.play();
        KeyBoardaudio.volume = percent;
    }

})
// envraincitychill
envraincitychill.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = envraincitychill.getBoundingClientRect().left
    const width = envraincitychill.getBoundingClientRect().width
    const min = left
    const max = envraincitychill.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        envraincitybarchill.style.width = percent * 100 + '%';
        envraincitycirclechill.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
        // console.log(percent);
        if(percent<0.01) RainCityaudio.volume =0;
    }

})
// envraincitycaferoom
envraincitycaferoom.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = envraincitycaferoom.getBoundingClientRect().left
    const width = envraincitycaferoom.getBoundingClientRect().width
    const min = left
    const max = envraincitycaferoom.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        envraincitybarcaferoom.style.width = percent * 100 + '%';
        envraincitycirclecaferoom.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
        // console.log(percent);
        if(percent<0.01) RainCityaudio.volume =0;
    }

})
// envkeyboardcaferoom
// envkeyboardcaferoom
envkeyboardcaferoom.addEventListener('mousemove', (evt) => {
    // console.log('envkeyboardcaferoom');
    const clientX = evt.clientX;
    const left = envkeyboardcaferoom.getBoundingClientRect().left
    const width = envkeyboardcaferoom.getBoundingClientRect().width
    const min = left
    const max = envkeyboardcaferoom.getBoundingClientRect().width + left
    if (isReadyToDragKeyBoard && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        KeyBoardbar.style.width = (percent * 100) + '%';
        KeyBoardcircle.style.left = percent * 100 + '%';
        envkeyboardbarcaferoom.style.width = percent * 100 + '%';
        envkeyboardcirclecaferoom.style.left = percent * 100 + '%';
        KeyBoardaudio.play();
        KeyBoardaudio.volume = percent;
        // console.log(percent);
        if(percent<0.01) KeyBoardaudio.volume =0;
    }

})
//envpeoplecaferoom
envpeoplecaferoom.addEventListener('mousemove', (evt) => {
    // console.log('envpeoplecaferoom');
    const clientX = evt.clientX;
    const left = envpeoplecaferoom.getBoundingClientRect().left
    const width = envpeoplecaferoom.getBoundingClientRect().width
    const min = left
    const max = envpeoplecaferoom.getBoundingClientRect().width + left
    if (isReadyToDragPeople && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Peoplebar.style.width = (percent * 100) + '%';
        Peoplecircle.style.left = percent * 100 + '%';
        envpeoplebarcaferoom.style.width = percent * 100 + '%';
        envpeoplecirclecaferoom.style.left = percent * 100 + '%';
        Peopleaudio.play();
        Peopleaudio.volume = percent;
        // console.log(percent);
        if(percent<0.01) Peopleaudio.volume =0;
    }

})
//envraicitybookcafe
envraincitybookcafe.addEventListener('mousemove', (evt) => {
    // console.log('envraincitybookcafe');
    const clientX = evt.clientX;
    const left = envraincitybookcafe.getBoundingClientRect().left
    const width = envraincitybookcafe.getBoundingClientRect().width
    const min = left
    const max = envraincitybookcafe.getBoundingClientRect().width + left
    if (isReadyToDragRainCity && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainCitybar.style.width = (percent * 100) + '%';
        RainCitycircle.style.left = percent * 100 + '%';
        envraincitybarbookcafe.style.width = percent * 100 + '%';
        envraincitycirclebookcafe.style.left = percent * 100 + '%';
        RainCityaudio.play();
        RainCityaudio.volume = percent;
        // console.log(percent);
        if(percent<0.01) RainCityaudio.volume =0;
    }

})
//envcitytrafficbookcafe
envcitytrafficbookcafe.addEventListener('mousemove', (evt) => {
    // console.log('envcitytrafficbookcafe');
    const clientX = evt.clientX;
    const left = envcitytrafficbookcafe.getBoundingClientRect().left
    const width = envcitytrafficbookcafe.getBoundingClientRect().width
    const min = left
    const max = envcitytrafficbookcafe.getBoundingClientRect().width + left
    if (isReadyToDragCityTraffic && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        CityTrafficbar.style.width = (percent * 100) + '%';
        CityTrafficcircle.style.left = percent * 100 + '%';
        envcitytrafficbarbookcafe.style.width = percent * 100 + '%';
        envcitytrafficcirclebookcafe.style.left = percent * 100 + '%';
        CityTrafficaudio.play();
        CityTrafficaudio.volume = percent;
        // console.log(percent);
        if(percent<0.01) CityTrafficaudio.volume =0;
    }

})


//Fan
Fan.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = Fan.getBoundingClientRect().left
    const width = Fan.getBoundingClientRect().width
    const min = left
    const max = Fan.getBoundingClientRect().width + left
    if (isReadyToDragFan && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Fanbar.style.width = (percent * 100) + '%';
        Fancircle.style.left = percent * 100 + '%';
        Fanaudio.play();
        Fanaudio.volume = percent;
    }

})
//People
People.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = People.getBoundingClientRect().left
    const width = People.getBoundingClientRect().width
    const min = left
    const max = People.getBoundingClientRect().width + left
    if (isReadyToDragPeople && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Peoplebar.style.width = (percent * 100) + '%';
        Peoplecircle.style.left = percent * 100 + '%';
        Peopleaudio.play();
        Peopleaudio.volume = percent;
    }

})
//RainForest
RainForest.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = RainForest.getBoundingClientRect().left
    const width = RainForest.getBoundingClientRect().width
    const min = left
    const max = RainForest.getBoundingClientRect().width + left
    if (isReadyToDragRainForest && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        RainForestbar.style.width = (percent * 100) + '%';
        RainForestcircle.style.left = percent * 100 + '%';
        RainForestaudio.play();
        RainForestaudio.volume = percent;
    }

})
//River
River.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = River.getBoundingClientRect().left
    const width = River.getBoundingClientRect().width
    const min = left
    const max = River.getBoundingClientRect().width + left
    if (isReadyToDragRiver && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Riverbar.style.width = (percent * 100) + '%';
        Rivercircle.style.left = percent * 100 + '%';
        Riveraudio.play();
        Riveraudio.volume = percent;
    }

})
//Waves
Waves.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = Waves.getBoundingClientRect().left
    const width = Waves.getBoundingClientRect().width
    const min = left
    const max = Waves.getBoundingClientRect().width + left
    if (isReadyToDragWaves && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Wavesbar.style.width = (percent * 100) + '%';
        Wavescircle.style.left = percent * 100 + '%';
        Wavesaudio.play();
        Wavesaudio.volume = percent;
    }

})
//Wind
Wind.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = Wind.getBoundingClientRect().left
    const width = Wind.getBoundingClientRect().width
    const min = left
    const max = Wind.getBoundingClientRect().width + left
    if (isReadyToDragWind && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        Windbar.style.width = (percent * 100) + '%';
        Windcircle.style.left = percent * 100 + '%';
        Windaudio.play();
        Windaudio.volume = percent;
    }

})


document.addEventListener('mouseup', () => {
    // console.log('mouseup');
    // audio.curentTime=newTime


    isReadyToDrag = false;
    isReadyToDragCityTraffic = false;
    isReadyToDragRainCity = false;
    isReadyToDragForestNight = false;
    isReadyToDragKeyBoard = false;
    isReadyToDragFan = false;
    isReadyToDragPeople = false;
    isReadyToDragRainForest = false;
    isReadyToDragRiver = false;
    isReadyToDragWaves = false;
    isReadyToDragWind = false;

})




function signupinchange(){
    signupBtn.addEventListener('click',function() {
        signinCtn.style.display='none';
        signupCtn.style.display='block';
    });
    signinBtn.addEventListener('click',function() {
        signupCtn.style.display='none';
        signinCtn.style.display='block';
    });

}
function signupinctnchange(){
    if(signupinCtnHidden==false)
    {
        signupinCtn.style.display='none';
        signupinCtnHidden=true;

        console.log('none');
    }
    else{
        signupinCtn.style.display='block';
        signupinCtnHidden=false;
        console.log('block');

    }
}
logout.addEventListener('click',function(){
    signupinCtn.style.display='block';
    headerSignupin.style.display='block';
    headerUsername.style.display='none';
    logout.style.display='none'
})
































function newTimee() {
    if (s === -1) {
        m -= 1;
        s = 59;
    }

    // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
    //  - giảm số giờ xuống 1 đơn vị
    //  - thiết lập số phút lại 59
    if (m === -1) {
        h -= 1;
        m = 59;
    }

    // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
    //  - Dừng chương trình
    if (h === -1) {
        clearTimeout(timeout);
        CityTrafficaudio.pause();
        RainCityaudio.pause();
        ForestNightaudio.pause();
        KeyBoardaudio.pause();
        Fanaudio.pause();
        Peopleaudio.pause();
        RainForestaudio.pause();
        Riveraudio.pause();
        Wavesaudio.pause();
        Windaudio.pause();
        audio.pause();
        playBtn.src = "./assets/img/play.png";
        alert('Hết giờ');
        document.querySelector('#h_val').value =" ";
    document.querySelector('#m_val').value =" ";
    document.querySelector('#s_val').value =" ";
    h = null;
    m = null;
    s = null;
        return;
    }

    /* HIỂN THỊ ĐỒNG HỒ*/
    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();

    timeout = setTimeout(function () {
        s--;
        newTimee();
    }, 1000);
}

function start() {

    if (h === null) {
        h = parseInt(document.getElementById('h_val').value);
        // console.log(h);
        if (isNaN(h)) {
            console.log(h);
            h = 0;

        }
        
        // console.log(h);
        // h=0;
        m = parseInt(document.getElementById('m_val').value);
        if (isNaN(m)) {
            console.log(m);
            m = 0;
        }
        s = parseInt(document.getElementById('s_val').value);
        if (isNaN(s)) {
            console.log(s);
            s = 0;

        }
    }
    newTimee();

}

function stop() {
    clearTimeout(timeout);
    console.log('stop');
}
function reset() {
    clearTimeout(timeout);
    document.querySelector('#h_val').value =" ";
    document.querySelector('#m_val').value =" ";
    document.querySelector('#s_val').value =" ";
    h = null;
    m = null;
    s = null;
}
 var web=document.documentElement;
 var webfullscreen=false;

 fullscreen.addEventListener('click', function(){
    if (webfullscreen==true) {
         document.exitFullscreen();
        fullscreenicon.classList.add('fa-expand');
        fullscreenicon.classList.remove('fa-compress');
        webfullscreen=false;
      } 
    if (webfullscreen==false) {
        web.requestFullscreen();
        fullscreenicon.classList.remove('fa-expand');
        fullscreenicon.classList.add('fa-compress');
        webfullscreen=true;
      } 
    
    
  
     
    })





    //jscountdown
    






























//tiến độ của bài hát
// function tiendo() {
//     volumeBar.style.width = (audio.currentTime ) / audio.duration * 100 + '%';
//     console.log((audio.currentTime + 1) / audio.duration * 100 + '%');
//     volumeCircle.style.left = (audio.currentTime ) / audio.duration * 100 + '%';
//     console.log((audio.currentTime + 1) / audio.duration * 100 + '%');

//     requestAnimationFrame(tiendo);
// };




























































