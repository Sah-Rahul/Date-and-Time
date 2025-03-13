var Time = document.getElementById("time");
var Dates = document.getElementById("date");

function updateTime() {
  let now = new Date();
  const hour = now.getHours() % 12 || 12;
  const Minutes = now.getMinutes().toString().padStart(2, "0");
  const Seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "AM" : "PM";

  const Option = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateTime = now.toLocaleDateString(undefined, Option);
  Dates.innerText = dateTime;
  Time.innerText = `${hour}:${Minutes}:${Seconds}${ampm}`;
}

setInterval(updateTime, 1000);
updateTime();
