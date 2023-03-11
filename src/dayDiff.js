import { isLeapYear } from "./leapYear.js";
import { monthToDay } from "./monthToDay.js";
// import { leftDay } from "./euroNewYear.js";

export function dayDifference(date){
//    day,month
// const dateArray = date.split('/')
// return (dateArray[2] + monthToDay(dateArray[1],isLeapYear(dateArray[0])) - leftDay)
return(date.getDate() + monthToDay(date.getMonth(),isLeapYear(date.getFullYear())))
}
// console.log(dayDifference(new Date()))