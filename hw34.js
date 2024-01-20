import Handlebars from "./node_modules/handlebars";
import template from "./templates/cardTempl.handlebars";

const refs = {
  cityBackdropEl: document.querySelector("[data-city-backdrop]"),
  cityInputEl: document.querySelector("[data-city]"),
};
// console.log(refs);

document.addEventListener("DOMContentLoaded", () => {
  const dayTime = new Date().getHours();
  if (dayTime >= 21 || dayTime <= 5) {
    refs.cityBackdropEl.classList.add("night-theme");
  } else if (dayTime >= 6 && dayTime <= 16) {
    refs.cityBackdropEl.classList.add("day-theme");
  } else if (dayTime >= 17 && dayTime <= 20) {
    refs.cityBackdropEl.classList.add("evening-theme");
  }
});

//?

refs.cityInputEl.addEventListener("change", async (e) => {
  const cityValue = e.currentTarget.value;
  let cityCode = "";

  await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=g6fPtSnnerlSQxLNA6uM5pde9EuNy0cG&q=${cityValue}`
  )
    .then((res) => res.json())
    .then(([{ Key }]) => {
      cityCode = Key;
    }).catch(err => {
      console.log(err);
    });
  await console.log(cityCode);
  await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=g6fPtSnnerlSQxLNA6uM5pde9EuNy0cG`
  )
    .then((res) => res.json())
    .then(({ DailyForecasts }) => {
      refs.cityBackdropEl.classList.add("is-hidden");
      console.log(DailyForecasts);
      //   let i = 0;
      const arr = DailyForecasts.map((day) => {
        const maxTemp = Math.round(
          ((day.Temperature.Maximum.Value - 32) * 5) / 9
        );
        const minTemp = Math.round(
          ((day.Temperature.Minimum.Value - 32) * 5) / 9
        );
        const date = new Date(day.Date);
        const dateStr = `${date.getDate()}.${date.getMonth() + 1}`;
        console.log(dateStr);

        console.log(maxTemp, minTemp);
        return {
          minMax: `${maxTemp} - ${minTemp}`,
          date: dateStr,
          dayStatus: day.Day.IconPhrase,
          nightStatus: day.Night.IconPhrase,
        };
      });
      console.log(arr);
      const markup = template({ forecast: arr });
      document.body.innerHTML = markup;
    });
});
