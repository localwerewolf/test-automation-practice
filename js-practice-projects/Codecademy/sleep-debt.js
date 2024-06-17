const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 6;
        break;
      case "tuesday":
        return 8;
        break;
      case "wednesday":
        return 9;
        break;
      case "thursday":
        return 5;
        break;
      case "friday":
        return 2;
        break;
      case "saturday":
        return 10;
        break;
      case "sunday":
        return 8;
        break;
    }
  };
  const getActualSleepHours = () => {
    let sleepHours = [
      getSleepHours("monday"),
      getSleepHours("tuesday"),
      getSleepHours("wednesday"),
      getSleepHours("thursday"),
      getSleepHours("friday"),
      getSleepHours("saturday"),
      getSleepHours("sunday"),
    ];
    let sleepHoursSum = 0;
    sleepHours.forEach((num) => {
      sleepHoursSum += num;
    });
    return sleepHoursSum;
  };
  //console.log(getSleepHours('friday'))
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  //console.log(getActualSleepHours())
  //console.log(getIdealSleepHours())
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return console.log("Perfect sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      return console.log("More sleep than you needed! Wake up! You slept: " + (actualSleepHours - idealSleepHours) + " hours more than ideal");
    } else if (actualSleepHours < idealSleepHours) {
      return console.log("Didn't get enough sleep! Back to bed. You slept: " + (idealSleepHours - actualSleepHours) + " hours less than ideal");
    }
  };
  calculateSleepDebt();
  