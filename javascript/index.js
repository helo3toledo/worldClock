function updateTime(){
   // New York
    let newYorkElement = document.querySelector("#new-york");
    let newYorkDateElement=newYorkElement.querySelector(".date");
  let newYorkTimeElement=newYorkElement.querySelector(".time");
let newYorkTime=moment() .tz("America/New_York");
newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

// Sydney
let sydneyElement=document.querySelector("#sydney");
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement=sydneyElement.querySelector(".time");
let sydneyTime=moment() .tz("Australia/Sydney");
sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML=sydneyTime.format( "h:mm:ss [<small>]A[</small>]");

//Rio
let rioElement=document.querySelector("#rio");
let rioDateElement=rioElement.querySelector(".date");
let rioTimeElement=rioElement.querySelector(".time");
let rioTime=moment() .tz("America/Sao_Paulo");
rioDateElement.innerHTML=rioTime.format("MMMM Do YYYY");
rioTimeElement.innerHTML=rioTime.format("h:mm:ss [<small>]A[</small>]");

//Tokyo

let tokyoElement=document.querySelector("#tokyo");
let tokyoDateElement=tokyoElement.querySelector(".date");
let tokyoTimeElement=tokyoElement.querySelector(".time");
let tokyoTime=moment() .tz("Asia/Tokyo");
tokyoDateElement.innerHTML=tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML=tokyoTime.format("h:mm:ss [<small>]A[</small>]");


}
function updateCity(event){
    let cityTimeZone=event.target.value;
    let cityName=cityTimeZone.replace("_","").split("/")[1];
    let cityTime=moment() .tz(cityTimeZone);
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML=`<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `
}
updateTime();
setInterval(updateTime,1000);


let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity)