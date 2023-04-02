function isLeapYear(year) {
    
    if( year % 100 == 0 && year % 400 !== 0 ){
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else{
        return false;
    }
}
let result = isLeapYear(2400);
console.log(result);