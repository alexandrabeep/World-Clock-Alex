function updateTime() {
  // Kuala Lumpur
  let kualaLumpurElement = document.querySelector("#kuala-lumpur");
  let kualaLumpurDateElement = kualaLumpurElement.querySelector(".date");
  let kualaLumpurTimeElement = kualaLumpurElement.querySelector(".time");
  let kualaLumpurTime = moment().tz("Asia/Kuala_Lumpur");
  kualaLumpurDateElement.innerHTML = kualaLumpurTime.format("MMMM Do YYYY");
  kualaLumpurTimeElement.innerHTML = `${kualaLumpurTime.format(
    "HH:mm[<small>]:ss[</small>]"
  )}`;

  // Barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Madrid");
  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = `${barcelonaTime.format(
    "HH:mm[<small>]:ss[</small>]"
  )}`;
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm[<small>]:ss[</small>]"
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
