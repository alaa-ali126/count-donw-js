let hours = document.querySelector(".hours"),
  minutes = document.querySelector(".minutes"),
  seconds = document.querySelector(".seconds"),
  interval = setInterval(() => {
    let oneSecond = 1000,
      oneMinute = 60 * 1000,
      oneHour = 60 * 60 * 1000,
      now = new Date(),
      [tempYear, tempMonth, tempDate] = [
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
      ],
      distance = new Date(tempYear, tempMonth, tempDate + 1, 17, 00),
      count = distance - now,
      cHours = Math.floor((count % (24 * oneHour)) / oneHour),
      cMinutes = Math.floor((count % oneHour) / oneMinute),
      cSeconds = Math.floor((count % oneMinute) / oneSecond);

    if (count < 0) {
      clearInterval(interval);
      cHours = 0;
      cMinutes = 0;
      cSeconds = 0;
    }

    hours.innerHTML = cHours < 10 ? `0${cHours}` : cHours;
    minutes.innerHTML = cMinutes < 10 ? `0${cMinutes}` : cMinutes;
    seconds.innerHTML = cSeconds < 10 ? `0${cSeconds}` : cSeconds;
  },1000);
