function compareTime(timeString1, timeString2) {
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);
    return dateTime1.getTime() > dateTime2.getTime();
}

function compareDate(timeString1, timeString2) {
    console.log("here");
    let date1 = new Date(timeString1);
    let date2 = new Date(timeString2);

    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();
    let day1 = date1.getDate();
    let day2 = date2.getDate();

    let isYearValid = year1 >= year2;
    let isMonthValid = month1 >= month2;
    let isDateValid = day1 >= day2;

    // If any one of them is false, return false
    if (!isYearValid) return false;
    if (!isMonthValid) return false;
    if (!isDateValid) return false;

    // If all are valid, return true
    return true;
}

module.exports = {
    compareTime,
    compareDate,
};
