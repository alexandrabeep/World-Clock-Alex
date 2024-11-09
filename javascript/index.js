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
updateTime();
setInterval(updateTime, 1000);
