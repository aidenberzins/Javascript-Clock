// ///////////////////////////
// Local Clock
// ///////////////////////////

const localClock = document.querySelectorAll('#localClock .hand');
const clockNY = document.querySelectorAll('#clockNY .hand');
const clockSF = document.querySelectorAll('#clockSF .hand');

const secondHand = document.querySelector('#localSecHand');
const minHand = document.querySelector('#localMinHand');
const hourHand = document.querySelector('#localHourHand');

const secondHandNY = document.querySelector('#secHandNY');
const minHandNY = document.querySelector('#minHandNY');
const hourHandNY = document.querySelector('#hourHandNY');

const secondHandSF = document.querySelector('#secHandSF');
const minHandSF = document.querySelector('#minHandSF');
const hourHandSF = document.querySelector('#hourHandSF');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  const minutesDeg = ((minutes / 60) * 360) + 90;
  const hoursDeg = ((hours / 12) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

function setDateNY(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() + 2;
  const secondsDeg = ((seconds / 60) * 360) + 90;
  const minutesDeg = ((minutes / 60) * 360) + 90;
  const hoursDeg = ((hours / 12) * 360) + 90;
  secondHandNY.style.transform = `rotate(${secondsDeg}deg)`;
  minHandNY.style.transform = `rotate(${minutesDeg}deg)`;
  hourHandNY.style.transform = `rotate(${hoursDeg}deg)`;
}
function setDateSF(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() - 1;
  const secondsDeg = ((seconds / 60) * 360) + 90;
  const minutesDeg = ((minutes / 60) * 360) + 90;
  const hoursDeg = ((hours / 12) * 360) + 90;
  secondHandSF.style.transform = `rotate(${secondsDeg}deg)`;
  minHandSF.style.transform = `rotate(${minutesDeg}deg)`;
  hourHandSF.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
setInterval(setDateSF, 1000);
setInterval(setDateNY, 1000);
