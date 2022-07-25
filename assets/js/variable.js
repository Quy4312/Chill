const dayNight =document.querySelector(".switch");
const bgVideo = document.querySelector('.background-video');
const bgVideoSub = document.querySelector('.background-video--sub');
const weaTher=document.querySelector('.icon--rain-container');
const weaThericon=document.querySelector(' .icon--rain-container i');
const chillvibes=document.querySelector('#chillvibes');
const bookcafe=document.querySelector('#bookcafe');
const caferoom=document.querySelector('#caferoom');
var chillvibeshl = 1;
var bookcafehl = 0;
var caferoomhl = 0;
const taskItemscreen=document.querySelector('#screen');
const sreenBoard=document.querySelector('#screen-board');
const soundBoard=document.querySelector('.soundboard');
const taskItemsound=document.querySelector('.soundboard-container');
const timeBoard=document.querySelector('.countdown-board');
const taskTime=document.querySelector('.countdown-container');
const musicBoard=document.querySelector('.music-list-board');
const taskMusic=document.querySelector('.music-container');

let checkweather=1;
let checkday=1;
var dayClear='./assets/videos/Day-sunny.mp4';
var nightClear='./assets/videos/Night-clear.mp4';
var dayRainny='./assets/videos/Day-rainny.mp4';
var nightRainny='./assets/videos/Night-rainny.mp4';
const playBtn=document.querySelector('#play');
const backBtn=document.querySelector('#back');
const nextBtn =document.querySelector('#next');
var isPlaying=false;
const audio=document.querySelector('#audio');
const namesong=document.querySelector('.namesong');
const render=document.querySelector('.render');
const soundvolumectn=document.querySelector('.js-sound__item');
const soundvolume=document.querySelector('.js-sound__volum');
const soundcircle=document.querySelector('.js-sound__circle');
let isReadyToDrag=false;
const CityTraffic=document.querySelector('.CityTraffic');
const RainCity=document.querySelector('.RainCity');
const ForestNight=document.querySelector('.ForestNight');
const KeyBoard=document.querySelector('.KeyBoard');
const Fan=document.querySelector('.Fan');
const People=document.querySelector('.People');
const RainForest=document.querySelector('.RainForest');
const River=document.querySelector('.River');
const Waves=document.querySelector('.Waves');
const Wind=document.querySelector('.Wind');
const CityTrafficbar=document.querySelector('.CityTraffic-bar');
const CityTrafficcircle=document.querySelector('.CityTraffic-circle');

const KeyBoardbar=document.querySelector('.KeyBoard-bar');
const KeyBoardcircle=document.querySelector('.KeyBoard-circle');

const RainCitybar=document.querySelector('.RainCity-bar');
const RainCitycircle=document.querySelector('.RainCity-circle');

const ForestNightbar=document.querySelector('.ForestNight-bar');
const ForestNightcircle=document.querySelector('.ForestNight-circle');

const Fanbar=document.querySelector('.Fan-bar');
const Fancircle=document.querySelector('.Fan-circle');

const Peoplebar=document.querySelector('.People-bar');
const Peoplecircle=document.querySelector('.People-circle');

const RainForestbar=document.querySelector('.RainForest-bar');
const RainForestcircle=document.querySelector('.RainForest-circle');

const Riverbar=document.querySelector('.River-bar');
const Rivercircle=document.querySelector('.River-circle');

const Wavesbar=document.querySelector('.Waves-bar');
const Wavescircle=document.querySelector('.Waves-circle');

const Windbar=document.querySelector('.Wind-bar');
const Windcircle=document.querySelector('.Wind-circle');


const CityTrafficaudio=document.querySelector('#CityTraffic');
const RainCityaudio=document.querySelector('#RainCity');
const ForestNightaudio=document.querySelector('#ForestNight');
const KeyBoardaudio=document.querySelector('#KeyBoard');
const Fanaudio=document.querySelector('#Fan');
const Peopleaudio=document.querySelector('#People');
const RainForestaudio=document.querySelector('#RainForest');
const Riveraudio=document.querySelector('#River');
const Wavesaudio=document.querySelector('#Waves');
const Windaudio=document.querySelector('#Wind');


let isReadyToDragCityTraffic = false;
let isReadyToDragRainCity = false;
let isReadyToDragForestNight = false;
let isReadyToDragKeyBoard = false;
let isReadyToDragFan = false;
let isReadyToDragPeople = false;
let isReadyToDragRainForest = false;
let isReadyToDragRiver = false;
let isReadyToDragWaves = false;
let isReadyToDragWind = false;

const chillkeyboardbtnsub=document.querySelector('.chillkeyboard-btn--sub');
const chillkeyboardbtn=document.querySelector('.chillkeyboard-btn');
const envkeyboard=document.querySelector('#envkeyboard')
const envkeyboardbar=document.querySelector('#envkeyboardbar')
const envkeyboardcircle=document.querySelector('#envkeyboardcircle')
const startbtn=document.querySelector('#start');
const stopbtn=document.querySelector('#stop');
const resetbtn=document.querySelector('#reset');
var h = null; // Giờ
var m = null; // Phút
var s = null; // Giây
 
var timeout = null; // Timeout



var currentindex=0;

   songs =[
        { name:'Chill1',
        path:'./assets/music_lofi/chill1.mp3',
        },
        { name:'Chill2',
        path:'./assets/music_lofi/chill2.mp3',
        },
        { name:'Chill3',
        path:'./assets/music_lofi/chill3.mp3',
        },
        { name:'Jazz1',
        path:'./assets/music_lofi/jazz1.mp3',
        },
        { name:'Jazz2',
        path:'./assets/music_lofi/jazz2.mp3',
        },
        { name:'Jazz3',
        path:'./assets/music_lofi/jazz3.mp3',
        },
        { name:'Sleepy1',
        path:'./assets/music_lofi/sleepy1.mp3',
        },
        { name:'Sleepy2',
        path:'./assets/music_lofi/sleepy2.mp3',
        },
        { name:'Sleepy3',
        path:'./assets/music_lofi/sleepy3.mp3',
        },
        { name:'Sleepy4',
        path:'./assets/music_lofi/sleepy4.mp3',
        },
    ]

    
    







