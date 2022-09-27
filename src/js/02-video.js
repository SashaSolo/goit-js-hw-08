import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
const time = localStorage.getItem(STORAGE_KEY);

if (time) {
  player.setCurrentTime(time);
}
// console.log(time);

player.on(
  'timeupdate',
  throttle(e => localStorage.setItem(STORAGE_KEY, e.seconds), 1000)
);
