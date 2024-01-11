const spans = document.querySelectorAll(".options span");
const timeValues = document.querySelectorAll(".time-value");
const timeTypes = document.querySelectorAll(".time-type span");
spans.forEach(span => span.onclick = () => getSelected(span));

let selected = null;
function getSelected(span) {
  spans.forEach(span => span.classList.remove("active"));
  span.classList.add("active");
  selected = span.textContent.toLowerCase();
  getData();
}

async function getData() {
  let data = await fetch("../data.json");
  let objData = await data.json();
  fitTheTiming(objData);
}

function fitTheTiming(obj) {
  for (let i = 0; i < 6; i++) {
    timeValues[i].textContent = `${obj[i]["timeframes"][selected].current}hrs`;
    timeTypes[i].textContent = `${obj[i]["timeframes"][selected].previous}hrs`;
  }
}

