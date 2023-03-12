import { isLeapYear } from "./leapYear.js";
import { monthToDay } from "./monthToDay.js";
export function dayDifference(date){
return(date.getDate() + monthToDay(date.getMonth(),isLeapYear(date.getFullYear())))
}
