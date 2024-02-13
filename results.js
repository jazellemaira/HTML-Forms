const resultsList = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((value, name) => {
  let currentLabel;
  switch (name) {
    case "hidden":
      currentLabel = "";
      break;
    case "name":
      currentLabel = "";
      break;
    case "date":
      currentLabel = "Today is";
      break;
    case "dayOfTheWeek":
      currentLabel = "A";
      break;
    case "time":
      currentLabel = "";
      break;
    case "energyMeter":
      currentLabel = "***Energy is at";
      break;
    case "hungriness":
      currentLabel = "***Hunger is at";
      break;
    case "thirstiness":
      currentLabel = "***Thirst is at";
      break;
    case "gratefulFor":
      currentLabel = "You said: I am grateful for...";
      break;
    case "color":
      currentLabel = "If today were a color, the color code would be:";
      break;
    case "musicGenre":
      currentLabel = "You're in the mood for something";
      break;
    case "file":
      currentLabel = "You want to keep";
      break;
    case "url":
      currentLabel = "A site that caught your interest is";
      break;
    case "phone":
      currentLabel = "You're ride or die can be reached through this number:";
      break;
    case "email":
      currentLabel = "People can message you at:";
      break;
    case "password":
      currentLabel = "Your magic word or phrase for the day is:";
      break;
    default:
      currentLabel = name;
  }

  const resultsDiv = document.createElement("div");
  resultsDiv.classList.add("result-row");
  var resultsItems = document.getElementsByClassName("results")[0];
  var resultsLabels = document.getElementsByClassName("result-label");
  var resultsValues = document.getElementsByClassName("result-value");
  var resultsItemsContents = `<div class="results-row">
<span class="result-label">${currentLabel}</span>
<span class="result-value">${value}</span>
</div>`;

  resultsDiv.innerHTML = resultsItemsContents;
  resultsItems.append(resultsDiv);
});
