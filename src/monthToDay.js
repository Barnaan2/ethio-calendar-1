import { isLeapYear } from "./leapYear.js";
// Day length in gorgerian calendar starting from [september to August]
const dayInMonth = [30 , 31 ,30 ,31,31 ,28 ,31 ,30 ,31 ,30,31 ,31]
// date relation this will be used to convert the month line as the one that match habesha month arrangement 
const gorgToEthioMonth = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]
const monthInWord = ["sep", "oct", "nov", "dec", "jan", "feb", "march", "april", "may", "june", "july", "august"]



// This method will return the days 
export function monthToDay(month,isLeapYear){
    let totalDays=0;
    let newMonth = gorgToEthioMonth[month-1]
    for(let i=0;i<newMonth;i++){

        console.log(monthInWord[i], i,dayInMonth[i])
        if(i===5 && isLeapYear){
          totalDays +=dayInMonth[i]+1;
        }
        else{ 
            totalDays +=dayInMonth[i];
        }
    }
    return totalDays;
}

// there is some error while parsing this date so 
console.log(monthToDay(7,false)) // fixed