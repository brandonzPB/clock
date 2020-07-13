const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#minute-hand');
const hourHand = document.querySelector('#hour-hand');


function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondsDeg = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minute = now.getMinutes();
  const minutesDeg = ((minute / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}


setInterval(setDate, 1000)