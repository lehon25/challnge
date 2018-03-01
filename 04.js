 //Leap year detector

 /*Create a function to detect a leap year. If I put 2018, the output will be false. But, if I put 2004, the output will be true.

You can find the rules of leap year through your favorite search engine.*/
function detectleapyear(year){
    if (year % 4 !== 0) {
    return false;
    } else if (year % 100 !== 0) {
    return true;
    } else if (year % 400 !== 0) {
    return false;
    } else {
    return true;
    }
    }
    console.log();