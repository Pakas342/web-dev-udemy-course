function isLeap(year) {
    if (year%4 === 0) {
        var divisibleBy4 = true;
    } else {
        var leapYear = false;
    }

    if (divisibleBy4 && (year%100 === 0)) {
        if (year%400 === 0) {
            var leapYear = true;
        } else {
            var leapYear = false;
        }
    } 
    
    if (divisibleBy4 && (year%100 !== 0)) {
        var leapYear = true;
    }

    if (leapYear) {
        return "Leap year.";
    } else {
        return "Not leap year."
    }
}