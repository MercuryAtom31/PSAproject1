let img1 = document.getElementById("alien");
img1.addEventListener(
  "mouseover",
  function () {
    changeImg("Images/aliensImage2.jpg");
  },
  false
);
img1.addEventListener(
  "mouseout",
  function () {
    changeImg("Images/ufoInvasion640x477.jpg");
  },
  false
);

function changeImg(imageName) {
  img1.setAttribute("src", imageName);
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Get the first element with class="alien1".
const alien1 = document.querySelector(".alien1");
//Get the first element with class="deadline".
const deadline = document.querySelector(".deadline");
/*Get the first element with class="alien1".
  and grabbing the header 4 within that div.
  const items = document.querySelectorAll(".deadline-format h4");
  */
/*
  new Date(); Will add the current date.
  If I want a specific date then I need to add these values inside
  the date();
  NOTICE! If I want to select the month of May, I need to write 4
  instead of 5 (being the month number). Because months are 0 based.
  */
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
/**
 *
 * To get the current date only, use the date() method
 * without arguments.
 */
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

//console.log(months[month]);

alien1.textContent = `Possibility to be rescued ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
// Future time in ms.
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  //1s = 1000ms
  //1m = 60s
  //1hr = 60minutes
  //1d = 24hrs

  //Values in ms (how many milliseconds are in one day).
  const oneDay = 24 * 60 * 60 * 1000;
  //How many milliseconds are in an hour.
  const oneHour = 60 * 60 * 1000;
  //How many milliseconds are in a minute.
  const oneMinute = 60 * 1000;
  //Calculating all values.
  let days = t / oneDay;
  /*
  The Math.floor() function returns 
  the largest integer less than or equal to a given number.
  e.g.
  console.log(Math.floor(5.95));
 expected output: 5

 console.log(Math.floor(5.05));
 expected output: 5

 console.log(Math.floor(5));
 expected output: 5

 console.log(Math.floor(-5.05));
 expected output: -6
*/
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values arrays.
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, aliens have arrived!</h4>`;
  }
}

//countdown.
let countdown = setInterval(getRemainingTime, 1000);
//Set initial values.
getRemainingTime();

//5:40:30

//giveaway = alien1.
