taskItemscreen.addEventListener('click', () => {
    if (sreenBoard.style.display === 'block') {
        sreenBoard.style.display = 'none';
    }
    else {
        sreenBoard.style.display = 'block';
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
    }
});

timeBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
taskMusic.addEventListener('click', () => {
    if (musicBoard.style.display === 'block') {
        musicBoard.style.display = 'none';
    }
    else {
        musicBoard.style.display = 'block';
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
    }
});

soundBoard.addEventListener('click', function (event) {
    event.stopPropagation();
})
chillkeyboardbtn.addEventListener('click', () => {
    if (chillkeyboardbtnsub.style.display === 'block') {
        chillkeyboardbtnsub.style.display = 'none';
    }
    else {
        chillkeyboardbtnsub.style.display = 'block';
        KeyBoardaudio.pause();
    }
});

chillkeyboardbtnsub.addEventListener('click', function (event) {
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
    dayClear = './assets/videos/Day-sunny.mp4';
    nightClear = './assets/videos/Night-clear.mp4';
    dayRainny = './assets/videos/Day-rainny.mp4';
    nightRainny = './assets/videos/Night-rainny.mp4';
    updatescreen();
    chillvibeshl = 1;
    bookcafehl = 0;
    caferoomhl = 0;
    checksreenhightlight();
}

function bookcafechange() {
    dayClear = './assets/videos/ExteriorDay.mp4';
    nightClear = './assets/videos/ExteriorNight.mp4';
    dayRainny = './assets/videos/ExteriorRainyDay.mp4';
    nightRainny = './assets/videos/ExteriorRainyNight.mp4';
    updatescreen();
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
envkeyboard.addEventListener('mousedown', () => {
    isReadyToDragKeyBoard = true;
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
//KeyBoardenv
envkeyboard.addEventListener('mousemove', (evt) => {
    const clientX = evt.clientX;
    const left = envkeyboard.getBoundingClientRect().left
    const width = envkeyboard.getBoundingClientRect().width
    const min = left
    const max = envkeyboard.getBoundingClientRect().width + left
    if (isReadyToDragKeyBoard && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width
        // console.log(percent);
        KeyBoardbar.style.width = (percent * 100) + '%';
        KeyBoardcircle.style.left = percent * 100 + '%';
        envkeyboardbar.style.width = (percent * 100) + '%';
        envkeyboardcircle.style.left = percent * 100 + '%';
        KeyBoardaudio.play();
        KeyBoardaudio.volume = percent;
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
































//tiến độ của bài hát
// function tiendo() {
//     volumeBar.style.width = (audio.currentTime ) / audio.duration * 100 + '%';
//     console.log((audio.currentTime + 1) / audio.duration * 100 + '%');
//     volumeCircle.style.left = (audio.currentTime ) / audio.duration * 100 + '%';
//     console.log((audio.currentTime + 1) / audio.duration * 100 + '%');

//     requestAnimationFrame(tiendo);
// };




























































