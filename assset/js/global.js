"use strict";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const newDate = new Date();

let weekday = weekdays[newDate.getDay()];
let newDateUTCTime = newDate.toUTCString();

const currentDay = document.getElementById("currentDay");
const currentUTC = document.querySelector("#currentTimeUTC");

currentDay.innerHTML = `${weekday}`;

const updateTime = () => {
  setInterval 
  let currentTime = new Date();
  let currentUTCTime = currentTime.toUTCString();

  currentUTC.innerHTML = `${currentUTCTime}`;
};

setInterval(updateTime, 1000);

currentUTC.innerHTML = '';
