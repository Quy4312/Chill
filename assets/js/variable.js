const dayNight =document.querySelector(".switch");
const bgVideo = document.querySelector('.background-video');
const bgVideoSub = document.querySelector('.background-video--sub');
const weaTher=document.querySelector('.icon--rain-container');
const weaThericon=document.querySelector(' .icon--rain-container i');
const taskItemscreen=document.querySelector('#screen');

const chillvibes=document.querySelector('#chillvibes');
const bookcafe=document.querySelector('#bookcafe');
const caferoom=document.querySelector('#caferoom');
var chillvibeshl = 1;
var bookcafehl = 0;
var caferoomhl = 0;
const sreenBoard=document.querySelector('#screen-board');
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

    
    







