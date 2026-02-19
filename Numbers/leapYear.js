function isLeapYear(year) {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
        ? `${year} is a leap Year`
        : `${year} is NOT a leap Year`


}
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2024));
