const daysElement = document.querySelector(".days");
const hrsElement = document.querySelector(".hrs");
const minsElement = document.querySelector(".mins");
const secsElement = document.querySelector(".secs");
const counterTime = document.querySelector(".counterTime")
const heading = document.querySelector("h1");
const seconds = 1000,
  minutes = 60 * seconds,
  hours = 60 * minutes,
  days = 24 * hours;

const countTimer = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  
  const enteredDay = prompt("Enter Day").padStart(2, "0");
  const enteredMonth = prompt("Enter Month").padStart(2, "0");
  let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

  today = `${mm}/${dd}/${yyyy}`
  if(today > targetDate )
    targetDate = `${enteredMonth}/${enteredDay}/${yyyy+1}`;
  const intervalId = setInterval(() => {
    const setDate = new Date(targetDate).getTime();
    const todaysDate = new Date().getTime();
    
    const diff = setDate - todaysDate;
    const daysleft = Math.floor(diff / days);
    const hoursleft = Math.floor((diff % days) / hours);
    const minutesleft = Math.floor((diff % hours) / minutes);
    const secondsleft = Math.floor((diff % minutes) / seconds);
    
    daysElement.innerText = daysleft;
    hrsElement.innerText = hoursleft;
    minsElement.innerText = minutesleft;
    secsElement.innerText = secondsleft;

    if(diff<0){
counterTime.style.display = "none";
heading.innerText = "Time's Over";
clearInterval(intervalId);
    }
  }, 0);
};
countTimer();
