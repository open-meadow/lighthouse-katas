const talkingCalendar = function (date) {
  // Your code here
  let dateArray = date.split("/");
  let suffix = "";

  if (dateArray[2] == 01) suffix = "st";
  else if (dateArray[2] == 02) suffix = "nd";
  else if (dateArray[2] == 03) suffix = "rd";
  else if (dateArray[2] == 22) suffix = "nd";
  else if (dateArray[2] == 23) suffix = "rd";
  else suffix = "th";

  switch (dateArray[1]) {
    case "01":
      return ("January " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "02":
      return ("Febuary " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "03":
      return ("March " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "04":
      return ("April " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "05":
      return ("May " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "06":
      return ("June " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "07":
      return ("July " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "08":
      return ("August " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "09":
      return ("September " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "10":
      return ("October " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "11":
      return ("November " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    case "12":
      return ("December " + dateArray[2] + suffix + ", " + dateArray[0]);
      break;

    default:
      return ("Invalid Date");
      break;
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
