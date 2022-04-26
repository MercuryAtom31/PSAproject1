const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
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
let img1=document.getElementById("alian");
img1.addEventListener("mouseover",function(){changeImg("Images/aliensImage2.jpg")}, false );
img1.addEventListener("mouseout",function(){changeImg("Images/ufoInvasion640x477.jpg")}, false );



function changeImg(imageName){

  img1.setAttribute("src", imageName);

}

  let futureDate = new Date(2022, 6, 24, 17, 30, 0);
  console.log(futureDate);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month]
  console.log(months[month]);

  alien1.textContent = 
  `giveway ends on ${month} ${year} ${hours}:${minutes}am`;

  //Stopped video at 5:19