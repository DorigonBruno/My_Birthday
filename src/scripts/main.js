const dateEvent = new Date("Feb 8, 2025 19:00:00");

const timeStampEvent = dateEvent.getTime();

const countHours = setInterval(() => {
  const dateNow = new Date();

  const timeStampNow = dateNow.getTime();

  const eventDistance = timeStampEvent - timeStampNow;

  const dayMS = 1000 * 60 * 60 * 24;
  const hoursMS = 1000 * 60 * 60;
  const minutesMS = 1000 * 60;

  const dayToEvent = Math.floor(eventDistance / dayMS);
  const hoursToEvent = Math.floor((eventDistance % dayMS) / hoursMS);
  const minutesToEvent = Math.floor((eventDistance % hoursMS) / minutesMS);
  const secondsToEvent = Math.floor((eventDistance % minutesMS) / 1000);

  const spanDays = document.querySelector("#days");
  const spanHours = document.querySelector("#hours");
  const spanMinutes = document.querySelector("#minutes");
  const spanSeconds = document.querySelector("#seconds");

  spanDays.innerHTML = `${dayToEvent} :`;
  spanHours.innerHTML = `${hoursToEvent} :`;
  spanMinutes.innerHTML = `${minutesToEvent} :`;
  spanSeconds.innerHTML = `${secondsToEvent} `;

  const title = document.querySelector("#title");

  if (eventDistance < 0) {
    clearInterval(countHours);
    title.innerHTML = "A festa ja foi T.T";
    spanDays.innerHTML = `00 :`;
    spanHours.innerHTML = `00 :`;
    spanMinutes.innerHTML = `00 :`;
    spanSeconds.innerHTML = `00 `;
  }
}, 1000);
