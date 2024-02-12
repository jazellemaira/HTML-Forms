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
      currentLabel = "You said: I am grateful for";
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
      currentLabel = "this number:";
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
  resultsList.append(`${currentLabel} ${value}`);
  resultsList.append(document.createElement("br"));
});